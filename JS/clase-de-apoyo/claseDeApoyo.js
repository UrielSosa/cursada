//string
let nombre = 'Rafel';

//number
let edad = 23;

//boolean
let esProfesor = true;

//objeto literal
let persona = {
  //propiedades
    nombreDePersona: nombre,
    edad: 16,
    esProfesor: true,
    //metodos
    saludar: function () {
        console.log('Hola');
    }
}


console.log(persona.nombreDePersona);
      //true         &&     //true
if (persona.esProfesor || persona.edad >= 18) {
    console.log('Es mayor de edad y es un profesor');
} else {
    console.log('Es menor de edad');
}

//array              //0        //1       //2     //3          //4
let arrayDeFrutas = ["Manzana", "Pera", "Banana", "Manzana", persona];

let personaDeArray = arrayDeFrutas[4];
let nombreDePersona = personaDeArray.nombreDePersona;
let terminaCon = nombreDePersona.endsWith('fel');

console.log(nombreDePersona, ' NOOOOMBREEEEEE?');
console.log(terminaCon, ' QUE SERE YO?');

if (arrayDeFrutas[4].nombreDePersona.endsWith('fel')) {
    console.log('Termina con fel');
}

if (terminaCon) {
    console.log('Termina con fel');
}

arrayDeFrutas.forEach(function (fruta) {
    console.log(fruta);
    console.log('  ');
    console.log('  ');
    console.log('  ');
    console.log('  ');
});