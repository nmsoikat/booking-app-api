const db = require('../models');
const { ErrorConstant } = require('../constants')

const CustomerRepository = {
    getById: async (id, transaction = null) => {
        const customer = await db.Customer.findByPk(id, { transaction });
        if (!customer) throw new Error(ErrorConstant.USER_NOT_FOUND);
        return customer;
    }
};

module.exports = CustomerRepository;
