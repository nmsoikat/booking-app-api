'use strict';
const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { ValidateMiddleware } = require('../middlewares');
const { AuthValidator } = require('../validators');

router.post('/signup', ValidateMiddleware(AuthValidator.signupValidate), AuthController.signup);
router.post('/login', ValidateMiddleware(AuthValidator.loginValidate), AuthController.login);
router.post('/create-super-admin', ValidateMiddleware(AuthValidator.signupValidate), AuthController.adminSignup);

module.exports = router;