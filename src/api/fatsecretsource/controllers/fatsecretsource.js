"use strict";

const Axios = require("axios");
const { setupCache } = require("axios-cache-interceptor");

const instance = Axios.create();
const request = require("request"),
  gm = require("gm");
const axios = setupCache(instance, {
  methods: ["get", "post"],
  // debug: (objet) => {
  //   strapi.log.debug(objet);
  // },
});

const APIErrorCode = {
  // GENERAL
  UNKNOWN: 1,
  UNKNOWN_METHOD: 10,
  APPLICATION_REQUEST_LIMIT_REACHED: 11,
  USER_PERFORMING_TOO_MANY_ACTIONS: 12,
  SYSTEM_TEMPORARILY_UNAVAILABLE: 20,
  INVALID_IP_ADDRESS: 21,
  INVALID_REQUEST: 22,

  // OAUTH 1.0
  MISSING_OAUTH_PARAMETERS: 2,
  UNSUPPORTED_OAUTH_PARAMETER: 3,
  INVALID_SIGNATURE_METHOD: 4,
  INVALID_CONSUMER_KEY: 5,
  INVALID_EXPIRED_TIMESTAMP: 6,
  INVALID_USED_NONCE: 7,
  INVALID_SIGNATURE: 8,
  INVALID_ACCESS_TOKEN: 9,

  // OAUTH 2.0
  INVALID_TOKEN: 13,
  MISSING_SCOPE: 14,

  // PARAMETER ERRORS
  MISSING_REQUIRED_PARAMETER: 101,
  INVALID_INTEGER_VALUE: 102,
  INVALID_DOUBLE_VALUE: 103,
  INVALID_DECIMAL_VALUE: 104,
  INVALID_LONG_VALUE: 105,
  INVALID_ID: 106,
  VALUE_OUT_OF_RANGE: 107,
  INVALID_TYPE: 108,

  // APPLICATION ERRORS
  ACTIVITY_NOT_FOUND: 201,
  SHIFT_TO_AND_SHIFT_FROM_MUST_BE_DIFFERENT: 202,
  TOO_MANY_MINUTES: 203,
  DATE_SELECTED_DOES_NOT_HAVE_AN_ACTIVITY: 204,
  DATE_MUST_BE_WITHIN_2_DAYS: 205,
  CANNOT_UPDATE_WEIGHT_FOR_EARLIER_DATE: 206,
  DATE_SELECTED_DOES_NOT_HAVE_ANY_FOOD_ENTRIES_TO_COPY: 207,
  INVALID_REGION: 208,
  ACTIVITY_CANNOT_BE_MODIFIED: 209,
  USER_CANNOT_HAVE_TEMPLATES_SET: 210,
};

class APIError extends Error {
  constructor(code, message) {
    super(message);

    this.name = "APIError";
    this.code = code;
  }
}

// Usage example:
const error = new APIError(APIErrorCode.UNKNOWN, "Unknown error occurred");
console.log(error.code); // Output: 1
console.log(error.message);

class BaseClient {
  constructor(options) {
    this.OAUTH_URL = "https://oauth.fatsecret.com/connect/token";
    this.API_URL = "https://platform.fatsecret.com/rest/server.api";
    this.options = options;

    axios.interceptors.response.use(async (response) => {
      const originalRequest = response.config;
      
      const responseError = response.data.error;

      if (responseError || (response.status >= 500)) {
        if (
          [
            APIErrorCode.INVALID_TOKEN,
            APIErrorCode.MISSING_OAUTH_PARAMETERS,
          ].includes(responseError.code)
        ) {

          await this.refreshToken();
          return axios.request(originalRequest);
        }
        throw responseError;
      }

      return response;
    });
  }

  async refreshToken() {
    const { credentials } = this.options;
    const formData = new URLSearchParams({
      grant_type: "client_credentials",
      scope: credentials.scope.join(" "),
    });

    const response = await axios.post(this.OAUTH_URL, formData, {
      auth: {
        username: credentials.clientId,
        password: credentials.clientSecret,
      },
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });

    const accessToken = "Bearer " + response.data["access_token"];
    axios.defaults.headers.common.Authorization = accessToken;
    return;
  }

  async doRequest(method, params) {
    // strapi.log.debug(Object.entries(axios.interceptors));
    return axios.post(
      this.API_URL,
      {},
      {
        params: {
          method: method,
          format: "json",
          ...params,
        },
      }
    );
  }
}

/**
 * A set of functions called "actions" for `fatsecretsource`
 */
const client = new BaseClient({
  credentials: {
    clientId: process.env.FATSECRET_CLIENT_ID,
    clientSecret: process.env.FATSECRET_CLIENT_SECRET,
    scope: ["basic"], // your scopes
  },
});

client.refreshToken();

module.exports = {
  consumer: async (ctx, next) => {
    const method =
      (ctx.params.method && ctx.params.method) || "recipes.search.v3";

    try {
      const response = await client.doRequest(method, ctx.query);
      if (response.data["code"] && response.data["message"]) {
        ctx.status = 500;
      }
      ctx.body = response.data;
    } catch (err) {
      ctx.body = err;
    }
  },
  resizer: async (ctx, next) => {
    const { url, width, height } = ctx.query;
    let res = await axios.get(
      url ||
      "https://images.pexels.com/photos/20191000/pexels-photo-20191000/free-photo-of-madera-vacaciones-arte-verano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      {
        responseType: "arraybuffer",
        decompress: true,
      }
    );
    let buf = Buffer.from(res.data, "base64");
    const resizedimage = await gm(buf, "image.jpg").resize(width, height);

    ctx.body = await new Promise(async (resolveOuter) => {
      await resizedimage.toBuffer("PNG", (err, buffer) => {
        // strapi.log.debug(buffer);
        resolveOuter(buffer);
      });
    });

    // data.data.resize(width, height);
  },
};
