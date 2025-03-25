import React from 'react';
import './App.css';
import logoImage from './assets/logo.png'; // Corrigir a importação da imagem

const App = () => {
  return (
    <div>
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
      <div class="button-container">
  <div class="left-buttons">
    <button class="button"></button>
    <button class="button"></button>
    <button class="button"></button>
  </div>
  <div class="right-buttons">
    <button class="button"></button>
    <button class="button"></button>
    <button class="button"></button>
  </div>
</div>

    </div>
  );
}

export default App;