'use strict';

const { CustomerRepository, EventRepository } = require('../repositories');

const CustomerService = {
    profile: async (req, transaction = null) => {
        const customer_id = req.user.id;
        const customer = await CustomerRepository.getById(customer_id)

        customer.password = undefined
        return customer;
    }
};

module.exports = CustomerService;
