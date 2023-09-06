import PropTypes from 'prop-types';

const Article = (props) => {
    console.log(props);
  return (
    <div className="col-12 col-lg-4">
      <article className="footer-data">
        <i className={ props.icon }></i>
        <h2>Pagá con tarjeta o en efectivo</h2>
        <p>
          Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o
          efectivo en puntos de pago. ¡Y siempre es seguro!
        </p>
      </article>
    </div>
  );
};

Article.propTypes = {
    icon: PropTypes.string
}
Article.defaultProps = {
    icon: 'fas fa-user-shield'
}

export default Article;