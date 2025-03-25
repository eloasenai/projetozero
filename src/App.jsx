
import React from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      <div className="top-left-image">
        {/* <img src={imagem} alt='plano de fundo'/> */}
      </div> 


    <div>
      <div className="top-bar"></div>
      {/* A imagem de fundo é definida no CSS */}
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
             <div className="vertical-bars">
          <div className="vertical-bar"></div>
          <div className="vertical-bar"></div>
        </div>
        </div>
    </>
  );
}

export default App;