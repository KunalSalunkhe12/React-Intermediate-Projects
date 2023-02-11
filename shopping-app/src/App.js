import './App.css';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
