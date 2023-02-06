import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./Home.css"
import MovieList from "../../components/MovieList/MovieList";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovieData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=1ae42c3ae909d955febaaf1de5b97387&language=en-US";

    const response = await fetch(url);
    const popularMoviesData = await response.json();

    setPopularMovies(popularMoviesData.results);
  };

  useEffect(() => {
    getPopularMovieData();
  }, []);

  return (
    <main>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        stopOnHover={true}
        showIndicators={false}
      >
        {
            popularMovies.map(movie => (
                <Link key={movie.id} to = {`/movie/${movie.id}`} style={{textDecoration: "none", color: "white"}}>
                    <div className="poster-img">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movie-poster" />
                    </div>
                    <div className="poster-overlay">
                        <div className="poster-title">
                            {movie ? movie.original_title : null}
                        </div>
                        <div className="poster-release">
                            {movie ? movie.release_date : null}
                            <span className="poster-vote">
                                {movie ? movie.vote_average : null}
                                <AiFillStar/>
                            </span>
                        </div>
                        <div className="poster-overview">
                            {movie.overview}
                        </div>
                    </div>
                </Link>
            ))
        }
      </Carousel>
      <MovieList/>
    </main>
  );
}

export default Home;
