import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import ProductCard from "./ProductCard";
import "./Product.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
