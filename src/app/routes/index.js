'use strict';
const AuthRoute = require('./auth.route');
const PublicEventRoute = require('./public-event.route');
const CustomerRoute = require('./customer.route');
const AdminEventRoute = require('./admin-event.route');

module.exports = (app) => {
    // Public routes
    app.use('/auth', AuthRoute);
    app.use('/events', PublicEventRoute)

    // Protected routes for customer
    app.use('/customer', CustomerRoute)

    // Protected routes for admin
    app.use('/admin/events', AdminEventRoute);
};