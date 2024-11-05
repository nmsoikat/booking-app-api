'use strict';

const { StringUtil } = require('../utils');

// trimRequest middleware: trim all request object: body, params, query
module.exports = (req, res, next) => {
    if (req.body) StringUtil.trimStringProperties(req.body);
    if (req.params) StringUtil.trimStringProperties(req.params);
    if (req.query) StringUtil.trimStringProperties(req.query);

    next();
};
