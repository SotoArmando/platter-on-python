module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fatsecretsource/:method",
      handler: "fatsecretsource.consumer",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/resize/:imagefile",
      handler: "fatsecretsource.resizer",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
