const db = require('../models');
const { ErrorConstant } = require('../constants')

const SeatRepository = {
    createSeats: async (seats, transaction = null) => {
        const newSeats = await db.Seat.bulkCreate(seats, { transaction });
        if (!newSeats) throw new Error(ErrorConstant.EVENT_SEAT_CREATION_FAIL)
        return newSeats;
    },

    updateSeats: async (seats, transaction = null) => {
        const newSeats = await db.Seat.bulkCreate(seats, { transaction });
        if (!newSeats) throw new Error(ErrorConstant.EVENT_SEAT_CREATION_FAIL)
        return newSeats;
    },

    findAvailableSeat: async (event_id, transaction = null) => {
        return await db.Seat.findOne({ where: { event_id, customer_id: null }, transaction });
    },

    reserveSeat: async (reserveFilter, reserveData, transaction = null) => {
        return await db.Seat.update(reserveData, { where: reserveFilter, transaction });
    },
};

module.exports = SeatRepository;
