const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/product', (req, res) => {
    console.log('Listado');
    return res.status(200).json([
        {
            "id": 1,
            "name": "Palangana",
            "price": 1200,
            "image": "img-heladera-whirpool.jpg"
        },
        {
            "id": 2,
            "name": "Escoba",
            "price": 500,
            "image": "img-laptop-lenovo.jpg"
        },
        {
            "id": 3,
            "name": "Macbook",
            "price": 12000,
            "image": "img-laptop-lenovo.jpg"
        }
    ]);
})



app.listen(3000, () => console.log('Server corriendo en el puerto 3000'));