module.exports = {
  routes: [
    {
      method: "GET",
      path: "/platterauth/platterConfirmValidation/:id",
      handler: "platterauth.platterConfirmValidation",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
