"use strict";

/**
 * A set of functions called "actions" for `auth`
 */

module.exports = {
  platterConfirmValidation: async (ctx, next) => {
    const { user: userService } = strapi.plugins["users-permissions"].services;

    const { email, token } = ctx.query;

    const entries = await strapi.entityService.findMany(
      "api::register-token.register-token",
      {
        filters: {
          Email: {
            $containsi: email,
          },
          Token: {
            $containsi: token,
          },
          Valid: {
            $eq: false,
          },
        },
      }
    );

    strapi.log.debug(entries);
    strapi.log.debug(token);
    strapi.log.debug(email);

    if (entries.length > 0) {
      const user = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { email: email } });

      const entry = await strapi.entityService.update(
        "api::register-token.register-token",
        entries[0].id,
        {
          data: {
            Valid: true,
          },
        }
      );

      ctx.body = entry;

      await userService.edit(user.id, {
        confirmed: true,
        confirmationToken: null,
      });
    } else {
      ctx.body = "Authentication data missing";
    }

    // ctx.body = err;
  },
};
