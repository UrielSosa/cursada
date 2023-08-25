const ropaController = {
  productoById: function (req, res){
    let id = req.params.id;
    //reviso que el id no sea 0
    //busco el producto filtrado por id en base de datos
    //devuelvo el producto
    res.send('Soy el productos ' + id);
  },
  algo:  function (req, res){
    res.send('TODOS LOS ' + req.params.hola)
  }
};

module.exports = ropaController;
