import { useState } from "react";
import "./App.css";
 //import MovieCard from "./components/MovieCards/MovieCards";
 //import MovieDescription from "./components/MovieDescription/MovieDescription.module.css";
//import Footer from "./components/Footer/Footer";
import fundo from "./components/img/image.png"


function App() {
  const [count, setCount] = useState();

  return (
    <>
      <h1></h1>
      <div className="fundo">
        <img src={fundo} alt="./components/img/image.png" />
      </div>
        
    </>
  );
}

export default App;
