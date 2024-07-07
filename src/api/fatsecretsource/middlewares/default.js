
module.exports = (config, { strapi }) => async (context, next) => {
  // Your custom code here
  setTimeout(() => {
    return context.throw(408);
  }, 4000);

  // Continue to the next middleware or controller
  await next();
};