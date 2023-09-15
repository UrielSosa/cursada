import Link from "./Link";

const Nav = ({ mainClass, links }) => {
  return (
    <ul className={mainClass}>
      {links.map((link) => (
        <Link link={link} key={link.title} />
      ))}
    </ul>
  );
};

export default Nav;
