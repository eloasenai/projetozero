import { useState } from 'react'
import './App.css'

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
      
    </>
  )
}

export default App
