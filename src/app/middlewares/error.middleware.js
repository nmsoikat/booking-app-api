'use strict';

const { ResponseUtil } = require("../utils")
const multer = require('multer');

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
        // if (err instanceof multer.MulterError) {
        //     res.send("upload filed")
        // }
        ResponseUtil.prodError(err, res)
    }
}