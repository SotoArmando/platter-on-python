module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "platter@sotoarmando.dev",
        defaultReplyTo: "platter@sotoarmando.dev",
        domain: "sotoarmando.dev",
      },
    },
  },
});
