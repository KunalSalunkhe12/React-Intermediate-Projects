import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import "./MovieDetail.css";

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getMoviesData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1ae42c3ae909d955febaaf1de5b97387&language=en-US`;
      const response = await fetch(url);
      const movieData = await response.json();
      setMovieDetail(movieData);
    };

    getMoviesData();
  }, [id]);

  return (
    <div className="movie">
      <div className="movie-intro">
        <div className="backdrop-container">
          <img
            className="movie-backdrop"
            src={`https://image.tmdb.org/t/p/original${
              movieDetail ? movieDetail.backdrop_path : ""
            }`}
            alt="movie backdrop"
          />
        </div>
      </div>
      <div className="movie-detail">
        <div className="movie-detailLeft">
          <div className="movie-posterBox">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.poster_path : ""
              }`}
              alt="movie poster"
            />
          </div>
        </div>
        <div className="movie-detailRight">
          <div className="movie-detailRightTop">
            <div className="movie-name">
              {movieDetail ? movieDetail.original_title : ""}
            </div>
            <div className="movie-tagline">
              {movieDetail ? movieDetail.tagline : ""}
            </div>
            <div className="movie-rating">
              {movieDetail ? movieDetail.vote_average : ""} <AiFillStar />
              <span className="movie-voteCount">
                {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie-runtime">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie-releaseDate">
              {movieDetail ? "Release date: " + movieDetail.release_date : ""}
            </div>
            <div className="movie-genres">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <span key={genre.id} className="movie-genre" id={genre.id}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie-detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movieDetail ? movieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie-links">
        <div className="link-heading">Useful Links:</div>
        {movieDetail && movieDetail.homepage && (
          <a href={movieDetail.homepage} style={{ textDecoration: "none" }}>
            <p>
              <span className="movie-homeButton movie-Button">
                Homepage{" "}
                <TbExternalLink key="home-link" className="link-icon" />
              </span>
            </p>
          </a>
        )}
        {movieDetail && movieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie-imdbButton movie-Button">
                IMDb <TbExternalLink key="imdb-link" className="link-icon" />
              </span>
            </p>
          </a>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
