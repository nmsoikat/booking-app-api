'use strict';

const { CustomerRepository } = require('../repositories');

const CustomerService = {
    profile: async (req, transaction = null) => {
        const customer_id = req.user.id;
        console.log("🚀 ~ customer_id:", customer_id);
        const customer = await CustomerRepository.getById(customer_id)

        customer.password = undefined
        return customer;
    }
};

module.exports = CustomerService;
