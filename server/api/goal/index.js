'use strict';

var express = require('express');
var controller = require('./goal.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();
router.get('/sharedNew', controller.getSharedNew);
router.get('/sharedRandom', controller.getSharedRandom);
router.get('/sharedRated', controller.getSharedRated);
router.get('/sharedRunning', controller.getSharedRunning);
router.get('/sharedWalking', controller.getSharedWalking);
router.get('/sharedPersonal', controller.getSharedPersonal);
router.get('/sharedIndoor', controller.getSharedIndoor);
router.get('/sharedOutdoor', controller.getSharedOutdoor);
router.get('/sharedCooking', controller.getSharedCooking);
router.get('/',controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);



module.exports = router;
