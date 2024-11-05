'use strict';

const { CustomerService } = require('../services');
const { ResponseUtil } = require('../utils');

const CustomerController = {
    profile: async (req, res, next) => {
        try {
            const result = await CustomerService.profile(req);
            ResponseUtil.success(res, result);
        } catch (error) {
            next(error);
        }
    },

};

module.exports = CustomerController;
