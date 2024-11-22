import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
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
