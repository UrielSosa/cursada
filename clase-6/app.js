const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a nuestro sitio web')
});

app.get('/productos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products.html'))
    res.sendFile(path.resolve(__dirname, './views/products.html'))
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));