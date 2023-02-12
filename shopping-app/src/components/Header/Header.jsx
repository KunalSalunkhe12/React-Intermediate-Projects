import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <nav>
      <Link to="/">Shopping Kart</Link>
      <Link to="/product/cart">
        <AiOutlineShoppingCart />
      </Link>
    </nav>
  );
}

export default Header;
