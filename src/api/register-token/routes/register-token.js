'use strict';

/**
 * register-token router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::register-token.register-token');
