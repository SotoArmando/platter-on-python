"use strict";

const Axios = require("axios");
const { setupCache } = require('axios-cache-interceptor');

const instance = Axios.create();
const axios = setupCache(instance, {
    methods: ['get', 'post'],
    debug: (objet) => { strapi.log.debug(objet) } });

class BaseClient {
  constructor(options) {
    this.OAUTH_URL = "https://oauth.fatsecret.com/connect/token";
    this.API_URL = "https://platform.fatsecret.com/rest/server.api";
    this.options = options;
 

    axios.interceptors.response.use(async (response) => {
      const originalRequest = response.config;
      const responseError = response.data.error;

      if (responseError) {
        // if (
        //     [APIErrorCode.INVALID_TOKEN, APIErrorCode.MISSING_OAUTH_PARAMETERS].includes(responseError.code) &&
        //     !originalRequest._retry
        // ) {
        //     originalRequest._retry = true;
        //     await this.refreshToken();
        //     return this.axios.request(originalRequest);
        // }
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
    strapi.log.debug(Object.entries(axios.interceptors))
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
  exampleAction: async (ctx, next) => {
    const method =
      (ctx.params.method && ctx.params.method) || "recipes.search.v3";

    try {
      const response = await client.doRequest(method, ctx.query);

      ctx.body = response.data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
