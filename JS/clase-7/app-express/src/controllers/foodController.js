let comidas = [
    {
        id: 1,
        name: 'Fideos con salsa bolognesa',
        price: 5000,
        category: 'destacada'
    },
    {
        id: 2,
        name: 'Milanesas con papas fritas',
        price: 5000,
        category: 'destacada'
    },
    {
        id: 3,
        name: 'Ensalada caesar',
        price: 5000,
        category: ''
    },
];

const controller = {
    all: (req, res) => {
        res.json(comidas);
    },
    one: function (req, res) {
        let id = +req.params.id;
        let comida = comidas.find(comida => comida.id == id); //El metodo find nos devuelve un objeto de la coincidencia del condicional
        res.json(comida);
    }
}

module.exports = controller;