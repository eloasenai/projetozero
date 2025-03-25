import React from 'react';
import './App.css';
import Logo from './Components/img/Captura de tela 2025-03-25 112327.png';

export const App = () => {
  return (
    <div>
      <div className="top-bar"></div>
      <Logo />
      {/* A imagem de fundo é definida no CSS */}
    </div>
  );
}

export default App;