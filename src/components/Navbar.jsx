import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to="/" className="text-2xl font-bold">JSCampShop</Link>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
