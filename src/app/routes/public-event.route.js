'use strict';

const express = require('express');
const router = express.Router();
const { EventController } = require('../controllers');

router.get('/', EventController.getAll);

module.exports = router;