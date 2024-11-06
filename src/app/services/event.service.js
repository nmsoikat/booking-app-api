'use strict';

const { ErrorConstant } = require('../constants');
const { EventRepository, SeatRepository } = require('../repositories');

const EventService = {
    getAll: async (req, transaction = null) => {
        return await EventRepository.getAll()
    },

    getById: async (req, transaction = null) => {
        const event_id = req.params.id;
        return await EventRepository.getById(event_id)
    },

    create: async (req, transaction = null) => {
        let {
            title,
            description,
            location,
            start_time,
            end_time,
            total_seat,
        } = req.body;

        const data = {
            title,
            description,
            location,
            start_time,
            end_time,
            total_seat,
            organizer_id: req.user.id,
            thumbnail: req?.files?.thumbnail?.[0]?.filename || '',
            banner: req?.files?.banner?.[0]?.filename || '',
        }

        const event = await EventRepository.create(data, transaction)

        const seats = []
        for (let i = 0; i < total_seat; i++) {
            seats.push({ event_id: event.id });
        }

        await SeatRepository.createSeats(seats, transaction)

        return event;
    },

    update: async (req, transaction = null) => {
        const event_id = req.params.id;

        let {
            title,
            description,
            location,
            start_time,
            end_time,
            total_seat
        } = req.body;

        const data = {
            title,
            description,
            location,
            start_time,
            end_time,
            total_seat,
            organizer_id: req.user.id
        }

        if (req?.files?.thumbnail?.[0]?.filename) {
            data.thumbnail = req?.files?.thumbnail?.[0]?.filename
        }

        // seat check
        const previousEvent = await EventRepository.getById(event_id, transaction)
        const updatedSeats = Math.abs(previousEvent.total_seat - total_seat);

        if (previousEvent.total_seat > total_seat) {
            // remove seat
            if (total_seat < previousEvent.sold_out_seat) {
                throw new Error(ErrorConstant.EVENT_SEAT_SOLD_OUT_REMOVE)
            }

            for (let i = 0; i < updatedSeats; i++) {
                await SeatRepository.findAvailableSeatAndDelete(event_id)
            }
        } else {
            // add seat
            const seats = []
            for (let i = 0; i < updatedSeats; i++) {
                seats.push({ event_id });
            }

            await SeatRepository.createSeats(seats, transaction)
        }

        // update information
        const event = await EventRepository.update(event_id, data, transaction)
        return event;
    },

    delete: async (req, transaction = null) => {
        const event_id = req.params.id;
        const event = await EventRepository.delete(event_id, transaction)
        return event;
    },
};

module.exports = EventService;
