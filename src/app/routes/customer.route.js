'use strict';
const express = require('express');
const router = express.Router();
const { CustomerController, CustomerEventController } = require('../controllers');
const { Authenticate, CustomerProtect } = require('../middlewares');

// Customer events
router.put('/events/reserve-seat/:id', Authenticate, CustomerProtect, CustomerEventController.reserveSeat);

// Customer profile
router.get('/profile', Authenticate, CustomerProtect, CustomerController.profile);

module.exports = router;