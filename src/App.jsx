import React, { useState, useEffect } from 'react';
import './App.css';
import logoImage from './assets/logo.png'; 
import MovieCard from './components/MovieCard/MovieCard'; 
import Modal from './components/MovieCard/MovieCard';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const apiKey = 'b194a75bc2a255114e63e9228d1e4eb9';
  const apiUrl = 'https://api.themoviedb.org/3';

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchQuery
          ? `${apiUrl}/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchQuery}`
          : `${apiUrl}/movie/popular?api_key=${apiKey}&language=pt-BR`;
          
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };
    
    fetchMovies();
  }, []);
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
        <div className="right-buttons">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button"></button>
        </div>
        <div className="button-container">
        <div className="left-buttons">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button"></button>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} apiUrl={apiUrl} {...movie} />
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
    </div>
  
  );
};

export default App;
