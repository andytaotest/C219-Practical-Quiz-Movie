import React from "react";

export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: movie.watched ? "#d4edda" : "#f8d7da",
      }}
    >
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          flexGrow: 1,
          textDecoration: movie.watched ? "line-through" : "none",
        }}
      >
        {movie.title}
      </span>
      <button
        onClick={() => onDeleteMovie(movie.id)}
        style={{
          padding: "5px 10px",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}
