'use strict';

const { ResponseUtil } = require("../utils")

/**
* Global error handler
* @param {Object} err
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @return {Error} Error
*/
module.exports = async (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        // console.log("#Dev-Log:", err);
        ResponseUtil.devError(err, res)
    } else {
        // console.log("#PROD-ERROR-LOG:", err);
        ResponseUtil.prodError(err, res)
    }
}