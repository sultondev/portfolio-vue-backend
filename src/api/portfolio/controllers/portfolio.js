'use strict';

/**
 * portfolio controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::portfolio.portfolio', ({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::portfolio.portfolio').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));