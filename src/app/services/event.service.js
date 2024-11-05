'use strict';

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
            thumbnail: req?.files?.thumbnail[0]?.filename || '',
            banner: req?.files?.banner[0]?.filename || '',
        }

        const event = await EventRepository.create(data, transaction)

        const seats = []
        for (let i = 0; i < total_seat; i++) {
            seats.push({ event_id: event.id });
        }

        await SeatRepository.createSeats(seats, transaction)

        return event;
    },

    update: async (req, transaction = null) => { },

    delete: async (req, transaction = null) => { },
};

module.exports = EventService;
