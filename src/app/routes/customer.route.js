'use strict';
const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { Authenticate, CustomerProtect } = require('../middlewares');

// Customer events
router.put('/events/reserve-seat', Authenticate, CustomerProtect, AuthController.signup);

// Customer profile
router.get('/profile', Authenticate, CustomerProtect, AuthController.signup);

module.exports = router;