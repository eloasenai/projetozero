
import React from 'react';
import './App.css';
import logoImage from './assets/logo.png'; 
import icone from "./assets/bookmark-outline.svg"
const App = () => {

  const apiKey="b194a75bc2a255114e63e9228d1e4eb9";
  const apiUrl="https://api.themoviedb.org/3"

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

   
    setMovies(data.Search);
  };
  
  
  return (
    <>
      <div className="top-left-image">

      </div> 


    <div>
      <div className="top-bar"></div>
      {}
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

    <div className="top-bar">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Pesquisar..." 

          />
           <input 
            type="text" 
            className="small-search-bar" 
            placeholder="Categoria "

            />
         
        </div>
    </>
  );
}

export default App;