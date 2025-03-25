<<<<<<< HEAD
import { useState } from 'react';
import imagem from "./components/img/fundo.png";

function App() {
  const [count, setCount] = useState();
=======
import React from 'react';
import './App.css';
>>>>>>> eloasenai

export const App = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="top-left-image">
        <img src={imagem} alt='plano de fundo'/>
      </div> 
    </>
=======
    <div>
      <div className="top-bar"></div>
      {/* A imagem de fundo é definida no CSS */}
    </div>
>>>>>>> eloasenai
  );
}

export default App;