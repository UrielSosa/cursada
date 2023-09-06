const Link = ({link}) => {
  return (
    <li>
      <a href={link.href}>
        {link.title}
        {link.icon ? <i className={link.icon} /> : null}
      </a>
    </li>
  );
};

export default Link;
