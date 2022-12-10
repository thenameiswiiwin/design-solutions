import Logo from './Logo';
import Button from './Button';

const Nav = () => {
  return (
    <nav
      role="navigation"
      className="container flex items-center justify-between"
    >
      <Logo />
      <Button styles="btn-primary" />
    </nav>
  );
};

export default Nav;
