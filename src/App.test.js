import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";

describe("Favorite Movies App", () => {
  // General App Tests
  test("renders the app and shows initial UI", () => {
    render(<App />);
    expect(screen.getByText(/Favorite Movies/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Movie Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
  });

  // AddMovieForm Tests
  test("adds a new movie", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Movie Title/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
  });

  test("prevents adding an empty movie", () => {
    render(<App />);
    const button = screen.getByText(/Add Movie/i);

    // Test with empty input
    fireEvent.click(button);
    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();

    // Test with whitespace input
    const input = screen.getByPlaceholderText(/Movie Title/i);
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);

    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();
  });

  // MovieList and Movie Tests
  test("marks a movie as watched", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Movie Title/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "The Matrix" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText(/The Matrix/i)).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("unmarks a watched movie", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Movie Title/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "The Matrix" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox); // Mark as watched
    fireEvent.click(checkbox); // Unmark

    expect(screen.getByText(/The Matrix/i)).not.toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("deletes a movie from the list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Movie Title/i);
    const button = screen.getByText(/Add Movie/i);

    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Inception/i)).not.toBeInTheDocument();
  });

  test("shows all movies correctly in the list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Movie Title/i);
    const button = screen.getByText(/Add Movie/i);

    // Add multiple movies
    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "The Matrix" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Interstellar" } });
    fireEvent.click(button);

    // Assert that all movies are displayed in the list
    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/The Matrix/i)).toBeInTheDocument();
    expect(screen.getByText(/Interstellar/i)).toBeInTheDocument();

    // Assert that the correct number of delete buttons are rendered
    const deleteButtons = screen.getAllByText(/Delete/i);
    expect(deleteButtons).toHaveLength(3);
  });
});
