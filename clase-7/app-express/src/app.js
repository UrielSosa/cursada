const express = require('express');
const app = express();

/* Rutas */
const food = require('./routes/food');
const users = require('./routes/users');
app.use('/api/comidas', food);
app.use('/api/users', users);


app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`));