'use strict';

/**
 * A set of functions called "actions" for `auth`
 */

module.exports = {
  platterConfirmValidation: async (ctx, next) => {
    const { user: userService } = strapi.plugins['users-permissions'].services;

    const { id } = ctx.params;

    await userService.edit(id, { confirmed: true, confirmationToken: null });

    try {
      ctx.body = id;
    } catch (err) {
      ctx.body = err;
    }
  }
};
