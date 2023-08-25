const path = require("path");
const fs = require("fs");
const datos = require("./usuario/datos-de-usuario.js");
const productos = require("./productos/productos.js");

const saludar = (nombre) => {
    return "Hola " + nombre;
};

const usuario = datos.usuario;
const arrayDeUsuarios = [usuario];

const rutaDeDB = path.join(__dirname, "./db/usuarios.json");
fs.writeFileSync(rutaDeDB, JSON.stringify(arrayDeUsuarios));

// const rutaDeNotas = path.join(__dirname, "./notas/notasDeTexto.txt");
// console.log(rutaDeNotas);
// fs.writeFileSync(rutaDeNotas, "Hello world!" + "\n");
// fs.appendFileSync(rutaDeNotas, "Hello world!" + "\n");
// const contenidoDeNotas = fs.readFileSync(rutaDeNotas, { encoding: "utf8" });
// console.log(contenidoDeNotas);

// console.log(path.dirname(__filename));

// const usuario = datos.usuario;
// const mascota = datos.mascota;

// console.log(usuario);
// console.log(mascota);

// const collarDePerro = productos.filter((producto) => {
//     return producto.id === "7898654dfgdfg";
// });

// console.log(collarDePerro);
