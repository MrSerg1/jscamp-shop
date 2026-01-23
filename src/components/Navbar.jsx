import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link
        to="/"
        className="text-2xl font-bold"
        viewTransition
      >
        JSCampShop
      </Link>
      <ul className="flex gap-4">
        <li><Link to="/" viewTransition>Home</Link></li>
        <li><Link to="/cart" viewTransition>Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
