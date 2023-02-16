import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductList from '../components/Product/ProductList'


function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    console.log(products)
  
  return (
    <ProductList products={products}/>
  )
}

export default Home