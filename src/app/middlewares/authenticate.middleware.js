'use strict';

const { promisify } = require('util')
const jwt = require('jsonwebtoken');
const { UserRepository } = require('../repositories');
const { ErrorConstant } = require('../constants');

/**
* Authentication check
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @return {Function} next() or next(error)
*/
module.exports = async (req, res, next) => {
    try {
        // Getting token and check
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            throw new Error(ErrorConstant.NOT_LOGIN)
        }

        // Verify
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_ACCESS_TOKEN_SECRET)

        // Check user still exist
        const currentUser = await UserRepository.getById(decoded.id)
        if (!currentUser) {
            throw new Error(ErrorConstant.USER_NO_LONGER_EXIST)
        }

        // Grant access to protected route
        req.user = currentUser
        next()
    } catch (error) {
        next(error)
    }
}