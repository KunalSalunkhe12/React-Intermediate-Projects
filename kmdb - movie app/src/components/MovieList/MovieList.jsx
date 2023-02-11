import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./MovieList.css";

function MovieList() {
  const { type } = useParams();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMoviesData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=1ae42c3ae909d955febaaf1de5b97387&language=en-US`;
      const response = await fetch(url);
      const moviesData = await response.json();
      setMovies(moviesData.results);
    };

    getMoviesData();
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);

  }, [type]);

  console.log(movies)

  return isLoading ? (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  ) : (
    <div className="movie-list">
      <h1 className="list-title">{type ? type.toUpperCase() : "POPULAR"}</h1>
      <div className="card-container">
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
