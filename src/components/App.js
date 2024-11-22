import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    if (!title.trim() || movies.some((movie) => movie.title === title)) return;
    const newMovie = { id: Date.now(), title, watched: false };
    setMovies([...movies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        {movies.length === 0
          ? "No movies added yet."
          : `You have ${movies.length} movie(s), ${
              movies.filter((movie) => movie.watched).length
            } watched.`}
      </footer>
    </div>
  );
}

export default App;
