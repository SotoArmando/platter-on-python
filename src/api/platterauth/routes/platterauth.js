module.exports = {
  routes: [
    {
      method: "GET",
      path: "/platterauth/platterConfirmValidation/",
      handler: "platterauth.platterConfirmValidation",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
