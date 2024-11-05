const db = require('../models');
const { ErrorConstant } = require('../constants')

const AuthRepository = {
    getById: async (id, transaction = null) => {
        return await db.Customer.findByPk(id, { transaction });
    },

    create: async (data, transaction = null) => {
        const customer = await db.Customer.create(data, { transaction });
        if (!customer) throw new Error(ErrorConstant.USER_CREATION_FAIL)
        return customer;
    },

    getByEmail: async (email, transaction = null) => {
        return await db.Customer.findOne({ where: { email }, transaction });
    }
};

module.exports = AuthRepository;
