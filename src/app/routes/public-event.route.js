'use strict';
const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { ValidateMiddleware } = require('../middlewares');

router.get('/', AuthController.signup);

module.exports = router;