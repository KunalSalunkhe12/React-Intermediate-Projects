import './App.css';
import ProductDetails from './components/Product/ProductDetails';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
