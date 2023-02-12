import ProductList from "../components/Product/ProductList";

function Cart() {
  const cartProducts = JSON.parse(localStorage.getItem("Cart"));
  return cartProducts ? (
    <ProductList products={cartProducts} />
  ) : (
    <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
      Add Products to Cart
    </h2>
  );
}

export default Cart;
