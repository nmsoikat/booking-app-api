'use strict';

module.exports = {
    Authenticate: require('./authenticate.middleware'),
    AdminProtect: require('./customer-verify.middleware'),
    CustomerProtect: require('./admin-verify.middleware'),

    TrimMiddleware: require('./trim.middleware'),
    ErrorMiddleware: require('./error.middleware'),
    ValidateMiddleware: require('./validate.middleware'),
};
