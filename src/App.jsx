import React from 'react';
import './App.css';
import logoImage from './assets/logo.png'; // Corrigir a importação da imagem

const App = () => {
  return (
    <div>
      <div className="top-bar"></div>
      {/* A imagem de fundo é definida no CSS */}
      <div className="top-bar">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Pesquisar..." 
        />
        <input 
          type="text" 
          className="small-search-bar" 
          placeholder="Categoria"
        />
      </div>
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="Logo" />
      </div>
    </div>
  );
}

export default App;