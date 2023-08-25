/* Ejercicio 1 - arrays */
// 1. Crea un array de numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2. Crea un array de strings
const frutas = [
    'Banana',
    "Manzana",
    'Pera',
    "Anana",
    'Uva',
    'Durazno'
];

// 3. Crea un array con objetos que sean diferentes “autos”
const autos = [
    {
        marca: 'fiat',
        version: 'siena',
        modelo: 2010,
        color: 'rojo'
    },
    {
        marca: 'chevy', 
        version: 'ss coupe', 
        modelo: 1973,
        color: 'negro'
    },
    { 
        marca: 'dodge', 
        version: 'charger', 
        modelo: 1968,
        color: 'Naranja'
    }
];

// 4. Crea un array con distintos objetos.
const cosas = [
    { 
        marca: 'chevy', 
        version: 'ss coupe', 
        modelo: 1973 
    },
    { 
        nombre: 'Uriel', 
        altura: '1.78', 
        anioDeNacimiento: 1999 
    }
];

// frutas.forEach((fruta) => {
//     console.log(fruta);
// })
// frutas.forEach(fruta => console.log(fruta));
// autos.forEach(auto => console.log(`El ${ auto.marca } es es modelo ${auto.modelo} y tiene un color ${auto.color}`));

// let arrayNuevo = frutas.concat(numeros);

// let arrayNuevo = [...frutas, ...numeros];
// console.log(arrayNuevo);

// let suma = numeros.reduce((acum, numero) => {
//     return acum + numero;
// }, 0);

// console.log(suma/numeros.length);


function mayoresQue(numero, array) {
    let mayores = array.filter(elemento => {
        return elemento > numero;
    });

    return mayores;
}

// console.log(mayoresQue(6, numeros));

function buscarPalabra(palabra, array) {
    // let nuevaPalabra = palabra.toLowerCase();
    return array.includes(palabra);
}
// console.log(buscarPalabra('Banana', frutas));

function multiplicadosDe(numero, array) {
    let multiplicados = array.map(elemento => {
        return elemento * numero;
    });

    return multiplicados;
}
// console.log(multiplicadosDe(2, numeros));

const reverso = (array) => {
    return array.reverse()
}

// console.log(reverso(numeros));

console.log(process.argv[2]);