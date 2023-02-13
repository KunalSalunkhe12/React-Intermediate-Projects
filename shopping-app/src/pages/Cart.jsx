import ProductList from "../components/Product/ProductList";
import { Link } from "react-router-dom";
import { RiBillFill } from "react-icons/ri";
import "./Pages.css";

function Cart() {
  const cartProducts = JSON.parse(localStorage.getItem("Cart"));
  return cartProducts ? (
    <>
      <h1 className="heading">Cart</h1>
      <ProductList products={cartProducts} />
      <Link to="/summary">
        <button className="proceed-btn">
          Proceed <RiBillFill />
        </button>
      </Link>
    </>
  ) : (
    <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
      Add Products to Cart
    </h2>
  );
}

export default Cart;
