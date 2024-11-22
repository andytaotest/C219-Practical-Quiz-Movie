import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}
