
module.exports = (config, { strapi }) => async (context, next) => {
  strapi.app.use(async (ctx, next) => {
    // Your custom code here
    setTimeout(() => {
      return ctx.throw(408);
    }, 4000);

    // Continue to the next middleware or controller
    await next();
  });
};