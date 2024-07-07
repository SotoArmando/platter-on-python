
module.exports = (config, { strapi }) => async (ctx, next) => {
  const TIMEOUT_DURATION = 5000;
        
  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) => {
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      ctx.status = 408;
      ctx.body = 'Request Timeout';
      reject(new Error('Request Timeout'));
    }, TIMEOUT_DURATION);
  });

  // Use Promise.race to race the timeout against the next middleware
  try {
    await Promise.race([timeoutPromise, next()]);
  } catch (err) {
    // Handle errors if necessary
    if (ctx.status !== 408) {
      ctx.status = 500;
      ctx.body = 'Internal Server Error';
    }
  }
};