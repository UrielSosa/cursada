import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();


  const getProduct = () => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(product => {
        setProduct(product);
      })
      .catch(error => console.log(error))
  }

  useEffect(getProduct, [id]);


  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            Detalle del producto: {product.name}
          </h2>
        </div>
      </div>
      <div className="product-detail">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img
              src={`http://localhost:3001/images/products/${product.image}`}
              alt="product"
              className="product-detail-img"
            />
            <p className="product-detail-description">{product.description}</p>
          </div>
          <div className="col-12 col-lg-4">
            <article className="product-detail-info">
              <h2 className="product-detail-title">{product.name}</h2>
              <p className="product-detail-price small">
                <span>${product.price}</span>/<b>{product.discount}% OFF</b>
              </p>
              <p className="product-detail-price">${product.price - (product.price * (product.discount /100))}</p>
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
