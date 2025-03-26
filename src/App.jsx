import React, { useState, useEffect } from "react";
import "./App.css";
import logoImage from "./assets/logo.png";
import MovieCard from "./components/MovieCard/MovieCard";
import Modal from "./components/MovieCard/MovieCard";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=b194a75bc2a255114e63e9228d1e4eb9",
      options
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className="top-bar">
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          className="small-search-bar"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="Logo" />
      </div>
      <div className="button-container">
        <div className="left-buttons">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button"></button>
        </div>
        <div className="right-buttons">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button"></button>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      ) : (
        <h2 className="empty">😢 Filme não encontrado 😢</h2>
      )}

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2>Conteúdo do Modal</h2>
          <p>Este é um exemplo de modal.</p>
        </Modal>
      )}
    </div>
    </>
  );
};

export default App;
