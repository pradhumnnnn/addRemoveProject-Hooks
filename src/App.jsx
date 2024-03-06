import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const addGirlfriend = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  const removeGirlfriend = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }




  return (
    <>
      <h1>Pradhumn Needs More Girlfriend {count}</h1>


      <button 
      onClick={addGirlfriend}>Need More Girlfriend</button>
      <br />

      <button
      onClick={removeGirlfriend}>Not Need</button>
    </>
  )
}

export default App;
