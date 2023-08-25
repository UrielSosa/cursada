const express = require('express');
const router = express.Router();
const controller = require('../controllers/ropaController')

//Ruta con una subruta variable
//localhost:3000/ropa/:hola
router.get('/:hola', controller.algo);

//localhost:3000/ropa/producto/:id
router.get('/producto/:id', controller.productoById);

router.get('/', (req, res) => {
  res.send('ROPA')
})

module.exports = router;
