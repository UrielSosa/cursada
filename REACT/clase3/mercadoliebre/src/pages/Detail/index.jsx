
const Detail = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            Detalle del producto: NOMBRE DEL PRODUCTO
          </h2>
        </div>
      </div>
      <div className="product-detail">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img
              src="./images/products/default-image.png"
              alt="product"
              className="product-detail-img"
            />
            <p className="product-detail-description">PRODUCT DESCRIPTION</p>
          </div>
          <div className="col-12 col-lg-4">
            <article className="product-detail-info">
              <h2 className="product-detail-title">PRODUCT NAME</h2>
              <p className="product-detail-price small">
                <span>$PRICE</span>/<b>DISCOUNT% OFF</b>
              </p>
              <p className="product-detail-price">$FINAL PRICE</p>
              <p className="product-detail-price">$PRICE</p>
              <ul className="actions-list">
                <li>
                  <i className="fas fa-credit-card" />
                  <p>Pagá en 12 cuotas sin interes</p>
                </li>
                <li>
                  <i className="fas fa-store" />
                  <p>Retiro gratis en locales del vendedor</p>
                </li>
              </ul>
              <a href="/" className="buy-now-button">
                COMPRAR AHORA
              </a>
              <hr />
              <a href="/products/edit/¿?" className="action-button edit">
                EDITAR PRODUCTO
              </a>
              <form
                action="/products/delete/¿¿"
                method="POST"
                style={{ display: "inline-flex" }}
              >
                <button type="submit" className="action-button delete">
                  ELIMINAR
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
