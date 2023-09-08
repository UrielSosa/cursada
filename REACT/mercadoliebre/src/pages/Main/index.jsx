import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(products => {
            setProducts(products);
            const offers = products.filter(product => product.discount > 15);
            setOffers(offers);
        })
  }

  useEffect(getProducts, []);

  useEffect(() => {
    console.log('El componente se actualizó');
  }, [products])

  return (
    <>
      {/* Banner */}
      <div className="banner" />

      {/* ultima visita */}
      <ProductList 
        title="Basados en tu ultima visita" 
        cart={cart} 
        setCart={setCart} 
        products={products} 
      />

      {/* Ofertas */}
      <ProductList 
        title="Ofertas" 
        products={offers} 
        cart={cart} 
        setCart={setCart} 
      />
    </>
  );
};

export default Main;

/* 
-- Listado de cosas para hacer
* 1. Importar useState para crear el state de productos
* 2. Crear el state de productos
* 3. Crear una función que se encargue de ir a buscar los productos a la API
* 4. Usar el hook useEffect para rellenar el state de productos
*/

/* 
-- Roles    
    PO - product owner
    TO - tecnical owners
    UX - user experience
    Devs - FRONT - BACK - FULLSTACK
    QA - Quality Assurance
*/