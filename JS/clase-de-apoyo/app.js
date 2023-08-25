//requiero express que se encuentra en la carpeta node_modules (si es que hicimos npm init).
const express = require('express');
//Este require me devuelve una funcion que TIENE que ser ejecutada para crear el servidor.
const servidor = express();
const ropaRouter = require('./routes/ropa')
const baseRouter = require('./routes/base')

//TODAS LAS RUTAS RECIBEN:
//req (request)
//res (response)
//Request es la peticion que manda el cliente.
//Response es lo que le devuelve el servidor al cliente.

//Ruta inicial localhost:3000 === localhost:3000/
servidor.use(baseRouter)
servidor.use('/ropa', ropaRouter);
//Si quisiesemos mas rutas
//servidor.use('/usuario', usuarioRouter);
//servidor.use('/producto', productoRouter);
//servidor.use('/', productoRouter);



servidor.listen(3000, () => {
  console.log('Corriendo el servidor')
})