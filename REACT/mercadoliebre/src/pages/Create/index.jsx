const Create = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            Formulario de creación de productos
          </h2>
        </div>
      </div>
      <div className="col-12">
        <form action method id="create-product">
          <div className="row product-detail">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre del producto:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Zapatillas Reebok"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="price" className="form-label">
                Precio del producto:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Ej: 5678"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="discount" className="form-label">
                Descuento:
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                placeholder="Ej: 15"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="category" className="form-label">
                Categoría:
              </label>
              <select name="category" id="category" className="form-input">
                <option value>Elegí</option>
                <option value="in-sale">En oferta</option>
                <option value="visited">Últimos agregados</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Descipción:
              </label>
              <textarea
                name="description"
                id="description"
                className="form-input"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="buy-now-button">
                Guardar producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
