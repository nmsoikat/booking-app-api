'use strict';
const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { Authenticate, AdminProtect } = require('../middlewares');

router.post('/', Authenticate, AdminProtect, AuthController.signup);
router.get('/', Authenticate, AdminProtect, AuthController.signup);
router.get('/:id', Authenticate, AdminProtect, AuthController.signup);
router.put('/:id', Authenticate, AdminProtect, AuthController.signup);
router.delete('/:id', Authenticate, AdminProtect, AuthController.signup);

module.exports = router;