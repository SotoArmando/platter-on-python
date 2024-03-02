'use strict';

/**
 * register-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-token.register-token');
