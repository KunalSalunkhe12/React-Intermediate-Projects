import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./Card.css";

function Card({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie && movie.poster_path
          }`}
          alt="movie poster"
        />
        <div className="card-overlay">
          <div className="card-title">{movie ? movie.original_title : ""}</div>
          <div className="card-runtime">
            {movie ? movie.release_date : ""}
            <span className="card-rating">
              {movie ? movie.vote_average : ""}
              <AiFillStar />
            </span>
          </div>
          <div className="card-description">
            {movie ? movie.overview.slice(0, 118) + "..." : ""}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
