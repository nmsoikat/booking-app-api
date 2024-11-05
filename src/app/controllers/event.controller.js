'use strict';

const db = require('../models');
const { EventService } = require('../services');
const { ResponseUtil } = require('../utils');

const EventController = {
    getAll: async (req, res, next) => {
        try {
            const result = await EventService.getAll(req);
            ResponseUtil.success(res, result);
        } catch (error) {
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const result = await EventService.getById(req);
            ResponseUtil.success(res, result);
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const result = await EventService.create(req, transaction);

            await transaction.commit();
            ResponseUtil.success(res, result);
        } catch (error) {
            await transaction.rollback();
            next(error);
        }
    },

    update: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const result = await EventService.update(req, transaction);

            await transaction.commit();
            ResponseUtil.success(res, result);
        } catch (error) {
            await transaction.rollback();
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const result = await EventService.delete(req);
            ResponseUtil.success(res, result);
        } catch (error) {
            next(error);
        }
    },
};

module.exports = EventController;
