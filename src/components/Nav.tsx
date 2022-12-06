import Logo from './Logo';
import Button from './Button';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <Button styles="btn-primary" />
    </nav>
  );
};

export default Nav;
