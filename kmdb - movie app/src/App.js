import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path = "/" element = {<Home/>}/>
        <Route  path = "/movie/:id" element = {<h1>Movie Details</h1>}/>
        <Route  path = "/movies/:type" element = {<h1>Movies List</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
