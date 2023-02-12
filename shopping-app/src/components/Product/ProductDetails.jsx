import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails, removeSelectedProduct } from "../../redux/actions/productActions";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Product.css";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []
  );
  const [button, setButton] = useState(true)

  useEffect(() => {
    dispatch(fetchProductDetails(id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id, dispatch]);

  const product = useSelector((state) => state.productDetail.data);

  const handleAddToCart = () => {
    setCartProducts([...cartProducts, product]);
    setButton(false)
  };

  useEffect(() => {
    const newCartProducts = cartProducts.filter((item, index) => cartProducts.indexOf(item) === index);
    localStorage.setItem("Cart", JSON.stringify(newCartProducts));
  }, [cartProducts, dispatch]);

  return product ? (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.images[0]} alt="product-img" />
      </div>
      <div className="detail-content">
        <div className="detail-title">{product.title}</div>
        <div>
          <span className="detail-price">${product.price}</span>
        </div>
        <div className="description">{product.description}</div>
        <div className="detail-category">Category: {product.category.name}</div>
        <button className="add-btn" onClick={handleAddToCart}>
          {button ? 'Add to Cart' : 'Added to Cart'} <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  ) : (
    <span className="loader"></span>
  );
}

export default ProductDetails;
