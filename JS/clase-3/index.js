let frutas = ['Pera', 'Manzana', 'Banana', 'Sandia'];
let numeros = [1, 2, 3, 4, 5, 6];
let combinacion = [5, 6, "una palabra", 'Otra palabra'];
// console.log(combinacion[2]);

let productos = [
    {
        nombre: 'Remera nike',
        precio: 7000,
        categoria: 'remeras'
    },
    {
        nombre: 'Gorra addidas',
        precio: 8000,
        categoria: 'gorras'
    },
    {
        nombre: 'Zapatillas vans',
        precio: 17000,
        categoria: 'zapatillas'
    }
];

// console.log("Precio: " + productos[0].precio);
// console.log("Precio: " + productos[1].precio);
// console.log("Precio: " + productos[2].precio);
// console.log("Categoria: " + productos[0].categoria);


/* Ciclo For */
// for (let contador = 1; contador <= 100 ; contador++) {
//     console.log('sorry');
// }

// console.log(productos.length); // con length podemos saber el largo del array

// for (let i = 0; i < productos.length; i++) {
//     console.log('Nombre ' + productos[i].nombre);
//     console.log('Precio ' + productos[i].precio);
// }

// let sitio = ['www', 'ecommerce', 'com'];
// numeros.push(10); // Agrega al final del array
// console.log(numeros);
// let numero = productos.pop(); // saca del final del array
// console.log(productos, numero);
// let sitioCompleto = sitio.join('.');
// console.log(sitioCompleto); // junta en un string el array

// console.log(sitio.includes('www')); // busca dentro del array lo que le pasemos por parametro
// if (sitio.includes('www')) {
//     console.log('Mi sitio arranca con www');
// }

// let indice = sitio.indexOf('www');
// if (indice == 0) {
//     console.log(indice);
// }

/* Metodos de arrays */
// frutas.forEach (function (fruta){
//     console.log(fruta);
// })
// frutas.forEach ((fruta) => console.log(fruta));
// frutas.forEach (fruta => console.log(fruta));


/* Map */
// let numerosPorDos = [];
// numeros.forEach (function (numero){
    // numerosPorDos.push(numero * 2);
// })
// console.log(numerosPorDos);

// let numerosPorDos = numeros.map(numero => {
//     return numero * 2;
// });
// console.log(numerosPorDos);

/* Filter */
// let mayoresQueCinco = numeros.filter(numero => {
//     return numero >= 5;
// })
// console.log(mayoresQueCinco);

/* Reduce */
// let sumatoria = numeros.reduce ((acumulador, numero) => {
//     return acumulador + numero;
// }, 0)

// console.log(sumatoria);
