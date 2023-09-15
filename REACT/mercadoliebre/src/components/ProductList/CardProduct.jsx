import { useRef } from "react";
import { Link } from 'react-router-dom';

const CardProduct = ({ product, cart, setCart }) => {
  const button = useRef();
  const imageUrl = `http://localhost:3001/images/products/${product.image}`;


  const addToCart = () => {
    console.log(button.current.id);
    console.log("estamos agregando al carrito");
    const carNew = [
      ...cart,
      button.current.id
    ];
    setCart(carNew);
  };
  // const linkTo = '/detail/' + product._id;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <Link to={`/detail/${product._id}`}>
          <figure className="product-box_image">
            <img
              src={imageUrl}
              alt="imagen de producto"
            />
          </figure>
          <article className="product-box_data">
            <h2>${product.price}</h2>
            <span>%{product.discount}</span>
            <p>{product.name}</p>
            <i className="fas fa-truck" />
          </article>
        </Link>
        <button id={product._id} onClick={addToCart} ref={button}>
          Add to cart
        </button>
      </section>
    </div>
  );
};

export default CardProduct;
