'use strict';
const express = require('express');
const router = express.Router();
const { CustomerController } = require('../controllers');
const { Authenticate, CustomerProtect } = require('../middlewares');

// Customer events
// router.put('/events/reserve-seat', Authenticate, CustomerProtect, AuthController.signup);

// Customer profile
router.get('/profile', Authenticate, CustomerProtect, CustomerController.profile);

module.exports = router;