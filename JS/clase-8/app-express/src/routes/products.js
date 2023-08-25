const express = require('express');
const router = express.Router()
const controller = require('../controllers/productsController');

router.get('/', controller.all);
router.get('/:id', controller.one);

module.exports = router;