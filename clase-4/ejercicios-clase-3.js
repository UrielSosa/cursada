const marcas = ["Fiat", "Renault", "Mitsubishi", "Toyota"];

const marcasNuevas = marcas.reduce((acumulador, unaMarca) => {
    return acumulador + " " + unaMarca + " NUEVA";
}, "");

const marcasNuevas2 = marcas.map((unaMarca) => {
    return unaMarca + " NUEVA";
});

console.log(marcasNuevas);
console.log(marcasNuevas2);
