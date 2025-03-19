import { useState } from 'react'
import './App.css'
// import MovieCard from "./components/MovieCards/MovieCards";
// import MovieDescription from "./components/MovieDescription/MovieDescription.module.css";
// import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState()

  return (
    <>

      
      <h1></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         {count}
        </button>
      </div>
      
  <footer/>
    </>
  )
}

export default App
