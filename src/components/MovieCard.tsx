import React from "react";
import type { Movie } from "../types/Movie";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white shadow-lg">
      <div className="w-full max-w-lg">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </div>
      <h3 className="mt-4 text-lg md:text-xl font-semibold text-center">
        {movie.title}
      </h3>
    </div>
  );
};

export default MovieCard;
