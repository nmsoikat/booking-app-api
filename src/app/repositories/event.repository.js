const db = require('../models');
const { ErrorConstant } = require('../constants')

const EventRepository = {
    getAll: async (transaction = null) => {
        return await db.Event.findAndCountAll({ transaction });
    },

    getById: async (id, transaction = null) => {
        const event = await db.Event.findByPk(id, { transaction });
        if (!event) throw new Error(ErrorConstant.EVENT_NOT_FOUND);
        return event;
    },

    create: async (data, transaction = null) => {
        const newEvent = await db.Event.create(data, { transaction });
        if (!newEvent) throw new Error(ErrorConstant.EVENT_CREATION_FAIL)
        return newEvent;
    },

    update: async (id, data, transaction = null) => {
        const event = await db.Event.update(data, { where: { id } }, { transaction });
        if (!event) throw new Error(ErrorConstant.EVENT_UPDATE_FAIL)
        return event;
    },

    delete: async (id, transaction = null) => {
        const event = await db.Event.findByPk(id, { transaction });
        if (!event) throw new Error(ErrorConstant.EVENT_NOT_FOUND)
        await event.destroy({ transaction });
    }
};

module.exports = EventRepository;
