module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fatsecretsource/:method",
      handler: "fatsecretsource.exampleAction",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
