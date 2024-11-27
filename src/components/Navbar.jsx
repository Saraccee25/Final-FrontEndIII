import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/product">Product</Link>
  </nav>
);

export default Navbar;
