import React, { useState, useEffect } from 'react'

const App = () => {

  const [count,setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count+1);
    },2000)
  });
  
  return (
    <>
      <h1>I've rendered { count } times!</h1>
    </>
  )
}

export default App