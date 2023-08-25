const productos = require("../productos/productos.js");
const usuario = {
    nombre: "Juan",
    edad: 30,
    email: "juan@gmail.com",
    pasatiempos: ["Correr", "Estudiar", "Leer"],
};

const mascota = {
    nombre: "Firulais",
    edad: 5,
    raza: "Pitbull",
};

module.exports = { usuario, mascota };
