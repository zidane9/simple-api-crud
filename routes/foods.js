'use strict'

const express = require('express');
let router = express.Router();
let controller = require('../controllers/foodController');

router.get('/', controller.getAll);

router.get('/:id', controller.getOne);

router.post('/', controller.createOne);

router.put('/:id', controller.update);

router.delete('/:id', controller.deleteOne);

module.exports = router;
