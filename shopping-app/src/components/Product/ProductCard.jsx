import React from "react";
import { Link } from "react-router-dom";
import './Product.css'


function ProductCard({ product }) {
  return (
    <Link className="product-card" to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
          <div className="card-image">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="card-content">
            <div className="card-header">{product.title}</div>
            <div className="card-price">$ {product.price}</div>
            <div className="card-category">{product.category.name}</div>
          </div>
    </Link>
  );
}

export default ProductCard;
