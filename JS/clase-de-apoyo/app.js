//requiero express que se encuentra en la carpeta node_modules (si es que hicimos npm init).
const express = require('express');
//Este require me devuelve una funcion que TIENE que ser ejecutada para crear el servidor.
const servidor = express();


//TODAS LAS RUTAS RECIBEN:
//req (request)
//res (response)
//Request es la peticion que manda el cliente.
//Response es lo que le devuelve el servidor al cliente.

//Ruta inicial localhost:3000 === localhost:3000/
servidor.get('/', function (req, res){
  res.send('PUBLICACIONES')
})

//Ruta con una subruta variable
servidor.get('/ropa/:hola', function (req, res){
  res.send('TODOS LOS ' + req.params.hola)
})

servidor.listen(3000)