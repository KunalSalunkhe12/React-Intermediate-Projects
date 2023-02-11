import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../redux/actions/productActions";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./Product.css";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [id, dispatch]);

  const product = useSelector((state) => state.productDetail.data);

  console.log(product);
  return product ? (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.images[0]} alt="product-img" />
      </div>
      <div className="detail-content">
        <div className="detail-title">{product.title}</div>
        <div><span className="detail-price">${product.price}</span></div>
        <div className="description">{product.description}</div>
        <div className="detail-category">Category: {product.category.name}</div>
        <button className="add-btn">Add to Cart <AiOutlineShoppingCart/></button>
      </div>
    </div>
  ) : (
    <span className="loader"></span>
  );
}

export default ProductDetails;
