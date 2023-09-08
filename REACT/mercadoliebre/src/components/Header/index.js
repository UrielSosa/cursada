import Nav from './Nav';
import { links } from '../../helpers/utils';

import logo from './assets/img/logo-mercado-liebre.svg';
import './assets/css/header.css';


function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-2">
            <a href="index.html" className="main-header_home-link">
              <img
                src={logo}
                alt="logo mercadoliebre"
              />
            </a>
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
        <nav className="main-navbar">
          <Nav 
            mainClass = {links[0].name}
            links = {links[0].links}
          />
          <Nav 
            mainClass = {links[1].name}
            links = {links[1].links}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
