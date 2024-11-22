import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      {/* TODO: Add MovieList Component */}
    </div>
  );
}

export default App;
