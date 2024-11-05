'use strict';

const { AuthUtil } = require('../utils')
const { AuthRepository } = require('../repositories');
const { ErrorConstant, RoleConstant } = require('../constants');

const AuthService = {
    login: async (req, transaction = null) => {
        const { email, password } = req.body;
        console.log("🚀 ~ req.body:", req.body);

        const customer = await AuthRepository.getByEmail(email, transaction)
        if (!customer || !(await AuthUtil.compareHashedPassword(password, customer.password))) {
            throw new Error(ErrorConstant.INVALID_CREDENTIAL)
        }

        // generate token
        const payload = { id: customer.id }
        const access_token = await AuthUtil.generateAccessToken(payload);

        customer.password = undefined
        return {
            customer,
            access_token
        };
    },

    signup: async (req, transaction = null, is_admin = false) => {
        let {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        // Customer already exists
        const existCustomer = await AuthRepository.getByEmail(email, transaction);
        if (existCustomer) throw new Error(ErrorConstant.USER_ALREADY_EXIST)

        // Password hash
        const salt = await AuthUtil.generateSalt()
        const passwordHashed = await AuthUtil.generateHashedPassword(password, salt)

        // Create new customer
        const data = {
            first_name,
            last_name,
            email,
            password: passwordHashed
        }
        if (is_admin) {
            data.role = RoleConstant.ADMIN;
        }
        const newCustomer = await AuthRepository.create(data, transaction);

        // Generate access token
        const payload = { id: newCustomer.id }
        const access_token = await AuthUtil.generateAccessToken(payload);

        // Remove password from output
        newCustomer.password = undefined;

        const result = {
            user: newCustomer,
            access_token
        }

        return result;
    }
};

module.exports = AuthService;
