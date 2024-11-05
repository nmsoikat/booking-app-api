const db = require('../models');
const { ErrorConstant } = require('../constants')

const EventRepository = {
    getAll: async (transaction = null) => {
        return await db.Event.findAndCountAll({ transaction });
    },

    getById: async (id, transaction = null) => {
        return await db.Event.findByPk(id, { transaction });
    },

    create: async (data, transaction = null) => {
        const newEvent = await db.Event.create(data, { transaction });
        if (!newEvent) throw new Error(ErrorConstant.EVENT_CREATION_FAIL)
        return newEvent;
    },

    update: async (data, transaction = null) => {
        const event = await db.Event.create(data, { transaction });
        if (!event) throw new Error(ErrorConstant.USER_CREATION_FAIL)
        return event;
    },

    delete: async (id, transaction = null) => {
        const event = await db.Event.findByPk(id, { transaction });
        if (!event) throw new Error(ErrorConstant.EVENT_NOT_FOUND)
        await event.destroy({ transaction });
    },

    createSeats: async (seats, transaction = null) => {
        const newSeats = await db.Seat.bulkCreate(seats, { transaction });
        if (!newSeats) throw new Error(ErrorConstant.EVENT_SEAT_CREATION_FAIL)
        return newSeats;
    },
};

module.exports = EventRepository;
