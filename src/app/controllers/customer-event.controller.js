'use strict';

const { CustomerEventService } = require('../services');
const { ResponseUtil } = require('../utils');

const CustomerEventController = {
    reserveSeat: async (req, res, next) => {
        try {
            const result = await CustomerEventService.reserveSeat(req);
            ResponseUtil.success(res, result);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = CustomerEventController;
