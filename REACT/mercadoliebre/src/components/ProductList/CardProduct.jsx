import { useRef } from "react";

const CardProduct = ({ product, cart, setCart }) => {
  const button = useRef();

  const addToCart = () => {
    console.log(button.current.id);
    console.log("estamos agregando al carrito");
    const carNew = [
      ...cart,
      button.current.id
    ];
    setCart(carNew);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <a href="/detail/">
          <figure className="product-box_image">
            <img
              src="./images/products/default-image.png"
              alt="imagen de producto"
            />
          </figure>
          <article className="product-box_data">
            <h2>${product.price}</h2>
            <span>%{product.discount}</span>
            <p>{product.name}</p>
            <i className="fas fa-truck" />
          </article>
        </a>
        <button id={product._id} onClick={addToCart} ref={button}>
          Add to cart
        </button>
      </section>
    </div>
  );
};

export default CardProduct;
