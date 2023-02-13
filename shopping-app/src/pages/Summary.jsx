import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

function Summary() {
  const products = JSON.parse(localStorage.getItem("Cart"));

  const handleCart = ()=>{
    localStorage.setItem('Cart', null)
  }

  return (
    <div className="order-summary">
      <div className="heading">Order Summary</div>
      <div className="order-container">
        <div className="order-details">
          <div className="order-name order-title">Product</div>
          <div className="order-price order-title">Price</div>
        </div>
        {products.map((product) => (
          <div className="order-details">
            <div className="order-name">{product.title}</div>
            <div className="order-price">${product.price}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="checkout-container">
        <div className="heading">Total</div>
        <div className="btn-container">
          <div className="total">
            $
            {products.reduce(function (acc, obj) {
              return acc + obj.price;
            }, 0)}
          </div>
          <Link to="/checkout"><button onClick={handleCart} className="checkout-btn">Checkout</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Summary;
