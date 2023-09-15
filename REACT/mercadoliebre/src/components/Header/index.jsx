import logo from './assets/img/logo-mercado-liebre.svg';
import './assets/css/header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-2">
            <Link to="/" className="main-header_home-link">
              <img
                src={logo}
                alt="logo mercadoliebre"
              />
            </Link>
          </div>
          <div className="col-7 col-md-6">
            <form action="/search" method="GET" className="search-form">
              <input
                type="text"
                name="keywords"
                placeholder="Buscar productos, marcas y más"
                className="search-form_input"
              />
              <button type="submit" className="search-form_button">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="col-12 col-md-4">
            <a href="/" className="main-header_credit-link">
              <i className="fas fa-hand-holding-usd" />
              Comprá en cuotas y sin tarjeta de crédito
            </a>
          </div>
        </div>
        <button className="btn-toggle-navbar">
          <i className="fas fa-bars" />
        </button>
        <nav class="main-navbar">
                <ul class="left-navbar">
                    <li><Link to="/">Todos los productos</Link></li>
                    <li><Link to="/results">Todos los resultados</Link></li>
                    <li><Link to="/detail/algo">Detalle</Link></li>
                    <li><Link to="/create">Crear</Link></li>
                    <li><Link to="/edit">Editar</Link></li>
                </ul>

                <ul class="right-navbar">
                    <li><Link to="/">Creá tu cuenta <i class="far fa-address-card"></i></Link></li>
                    <li><Link to="/">Ingresá <i class="fas fa-sign-in-alt"></i></Link></li>
                    <li><Link to="/">Mis compras <i class="fas fa-shopping-basket"></i></Link></li>
                </ul>
            </nav>
      </div>
    </header>
  );
}

export default Header;
