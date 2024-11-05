'use strict';

const { StatusCodeConstant } = require('../constants')

const ResponseUtil = {
    /**
    * @return {Object} {is_success: true}
    */
    isSuccessTrue: () => {
        return { is_success: true }
    },

    /**
    * @return {Object} {is_success: false}
    */
    isSuccessFalse: () => {
        return { is_success: false }
    },

    /**
    * Result to json response
    * @param {Object} res
    * @param {any} data
    * @return {Object} json response.
    */
    success: (res, data) => {
        return res.status(StatusCodeConstant.OK).json({
            is_success: true,
            data
        })
    },

    /**
    * Result to json response
    * @param {Object} res
    * @param {any} data
    * @return {Object} json response.
    */
    redirectToWebsite: (res, url) => {
        return res.redirect(url)
    },

    /**
    * Result to json response
    * @param {Object} res
    * @param {any} data {total, rows, page, limit, count}
    * @return {Object} json response.
    */
    successWithPagination: (res, { total, rows, count, page, limit }) => {
        return res.status(StatusCodeConstant.OK).json({
            is_success: true,
            total,
            page_no: page,
            per_page: limit,
            data_count: count,
            data: rows
        })
    },


    /**
    * Result to json response
    * @param {Object} res
    * @param {any} data
    * @return {Object} json response.
    */
    created: (res, data) => {
        return res.status(StatusCodeConstant.CREATED).json({
            data
        })
    },

    /**
    * Result
    * @param {Object} res
    * @param {any} data
    * @return {Object} result.
    */
    successRow: (res, data) => {
        return res.status(StatusCodeConstant.OK).json(data)
    },

    /**
    * Error response for development. Details error with error stack.
    * @param {Object} err
    * @param {Object} res
    * @return {Object} send response.
    */
    devError: (err, res) => {
        return res.status(StatusCodeConstant.BAD_REQUEST).send({
            is_success: false,
            status: err.status,
            message: err.message,
            error: err,
            stack: err.stack
        })
    },

    /**
    * Error response for production. Message and status
    * @param {Object} err
    * @param {Object} res
    * @return {Object} send response.
    */
    prodError: (err, res) => {
        return res.status(StatusCodeConstant.BAD_REQUEST).send({
            is_success: false,
            status: err.status,
            message: err.message,
        })
    }
}

module.exports = ResponseUtil;