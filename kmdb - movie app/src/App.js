import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header'
import './App.css';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './pages/MovieDetails/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/movies/:type" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
