const express = require('express');
const router = express.Router();
const controller = require('../controllers/foodController');

// Todas las comidas
router.get('/', controller.all);
// Una comida
router.get('/:id', controller.one);

module.exports = router;