const Results = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Resultados de la búsqueda: </h2>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <section className="product-box">
            <a href="/products/detail/¿?">
              <figure className="product-box_image">
                <img
                  src="./images/products/default-image.png"
                  alt="imagen de producto"
                />
              </figure>
              <article className="product-box_data">
                <h2>$FINAL PRICE</h2>
                <span>DISCOUNT% OFF</span>
                <p>PRODUCT NAME</p>
                <i className="fas fa-truck" />
              </article>
            </a>
          </section>
        </div>
        <div className="col-12">
          <h2 className="products-title" style={{ color: "tomato" }}>
            No hay productos que coincidan con esa búsqueda
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Results;
