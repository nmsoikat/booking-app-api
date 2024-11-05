'use strict';

const { ErrorConstant, RoleConstant } = require('../constants');

/**
* Role check
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @return {Function} next() or next(error)
*/
module.exports = async (req, res, next) => {
    try {
        if (!req?.user) {
            throw new Error(ErrorConstant.NOT_LOGIN)
        }

        if (!req?.user?.role !== RoleConstant.ADMIN) {
            throw new Error(ErrorConstant.UNAUTHORIZED_ACCESS)
        }

        next()
    } catch (error) {
        next(error)
    }
}