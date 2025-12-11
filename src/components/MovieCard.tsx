import React from "react";
import type { Movie } from "../types/Movie";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? imageUrl : "/no-movie.png"}
        alt={movie.title}
        className="w-full h-auto object-cover rounded-lg shadow-xl"
      />
      <div className="mt-4">
        <h3>{movie.title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="Star" />
            <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">
            {movie.original_language ? movie.original_language : "N/A"}
          </p>
          <span>•</span>
          <p className="year">
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
