'use strict';

const db = require('../models');
const { AuthService } = require('../services');
const { ResponseUtil } = require('../utils');

const AuthController = {
    login: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const { customer, access_token } = await AuthService.login(req, transaction);

            customer.dataValues = { ...customer.dataValues, access_token };

            await transaction.commit();
            ResponseUtil.success(res, customer);
        } catch (error) {
            await transaction.rollback();
            next(error);
        }
    },

    signup: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const result = await AuthService.signup(req, transaction);

            await transaction.commit();
            ResponseUtil.success(res, result);
        } catch (error) {
            await transaction.rollback();
            next(error);
        }
    },

    adminSignup: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const result = await AuthService.signup(req, transaction, true);

            await transaction.commit();
            ResponseUtil.success(res, result);
        } catch (error) {
            await transaction.rollback();
            next(error);
        }
    },

};

module.exports = AuthController;
