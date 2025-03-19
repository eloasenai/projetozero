import { useState } from 'react';
import imagem from "./components/img/fundo.png";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div className="top-left-image">
        <img src={imagem} alt='plano de fundo'/>
      </div> 
    </>
  );
}

export default App;