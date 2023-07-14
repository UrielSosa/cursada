let numero1 = 10;
let numero2 = 5;

                     //parametros
function calculadora(flor, tipoDeOperacion, num2) {
    if (tipoDeOperacion == '+') {
        return flor + num2;
    }
    if (tipoDeOperacion == '-') {
        return flor - num2;
    }
    if (tipoDeOperacion == '*') {
        return flor * num2;
    }
    if (tipoDeOperacion == '/') {
        return flor / num2;
    }
}
//inicio variable
let eze;
//asigno la variable con lo que devuelve la funcion
eze = calculadora(numero1, '/', numero2);

//FUNCION ANONIMA
// function (num1) {
//     return num1;
// }

//CREO UN ARRAY
let arrayDeFrutas = ["Manzana", "Pera", "Banana", "Uva"];

//forEach recorre todos los elementos de un Array. Es un metodo.
//Este metodo recibe una funcion (la definicion, no la invocacion).
//La funcion se ejecuta forEach elemento.
arrayDeFrutas.forEach(function (elemento) {
                            console.log(elemento);
                      }
);