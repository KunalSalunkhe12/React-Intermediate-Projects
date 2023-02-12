import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

function ProductList({products}) {

  return products && products.length !== 0 ? (
    <div className="product-container">
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  ) : (
    <span className="loader"></span>
  );
}

export default ProductList;
