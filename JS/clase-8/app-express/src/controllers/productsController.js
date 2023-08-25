const fs = require('fs');
const path = require('path');

/* Obtener el JSON */
const rutaAlJson = path.resolve(__dirname, '../data/products.json');

const dataJSON = fs.readFileSync(rutaAlJson, { encoding: 'utf8' });

const products = JSON.parse(dataJSON);


const controller = {
    all: (req, res) => {
        res.json(products);
    },
    one: (req, res) => {
        let id = req.params.id;
        let product = products.find(producto => producto.id == id);
        res.json(product);
    }
}

module.exports = controller;