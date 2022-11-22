'use strict';

/**
 * recommendation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommendation.recommendation');
