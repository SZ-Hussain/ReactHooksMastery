import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev+1 );
  }

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>increase</button>
    </>
  )
}

export default App