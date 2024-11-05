'use strict';
const express = require('express');
const router = express.Router();
const { EventController } = require('../controllers');
const { Authenticate, AdminProtect, UploadMiddleware } = require('../middlewares');

router.post('/', Authenticate, AdminProtect,
    UploadMiddleware.uploadImage('/event-images').fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'banner', maxCount: 1 },
    ]),
    EventController.create);
router.get('/', Authenticate, AdminProtect, EventController.getAll);
router.get('/:id', Authenticate, AdminProtect, EventController.getById);
router.put('/:id', Authenticate, AdminProtect,
    UploadMiddleware.uploadImage('/event-images').fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'banner', maxCount: 1 },
    ]),
    EventController.update);
router.delete('/:id', Authenticate, AdminProtect, EventController.delete);

module.exports = router;