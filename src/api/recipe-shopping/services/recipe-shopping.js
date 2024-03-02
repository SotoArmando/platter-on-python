'use strict';

/**
 * recipe-shopping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe-shopping.recipe-shopping');
