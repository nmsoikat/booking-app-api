'use strict';

const { ErrorConstant } = require('../constants');
const { SeatRepository } = require('../repositories');

const CustomerEventService = {
    reserveSeat: async (req, transaction = null) => {
        const event_id = req.params.id;
        const user_id = req.user.id;

        // Find the available seat
        const availableSeat = await SeatRepository.findAvailableSeat(event_id, transaction)
        if (!availableSeat) {
            throw new Error(ErrorConstant.EVENT_SEAT_BOOKED)
        }

        const reserveFilter = {
            id: availableSeat.id,
            version: availableSeat.version,
        }

        const reserveData = {
            customer_id: user_id,
            version: 1,
        }

        const seat = await SeatRepository.reserveSeat(reserveFilter, reserveData, transaction)

        // TODO: send email

        return seat;
    }
};

module.exports = CustomerEventService;
