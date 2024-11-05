'use strict';

module.exports = {
    Authenticate: require('./authenticate.middleware'),
    AdminProtect: require('./admin-verify.middleware'),
    CustomerProtect: require('./customer-verify.middleware'),

    TrimMiddleware: require('./trim.middleware'),
    ErrorMiddleware: require('./error.middleware'),
    ValidateMiddleware: require('./validate.middleware'),
};
