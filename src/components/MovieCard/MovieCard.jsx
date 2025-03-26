import React from "react";
import "./MovieCard.module.css";

const MovieCard = ({ title, overview, posterPath, releaseDate }) => {
  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{overview}</p>
        <p><strong>Release Date:</strong> {releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;