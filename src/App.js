import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function App() {
  const [currentform, setCurrentform] = useState('Login');

  const toggleform = (prem) => {
    setCurrentform(prem);
  }
  return (
    <>
      {
        currentform === 'Login' ? <Login Switch={toggleform} /> : <Register Switch={toggleform} />
      }
    </>
  )
}

export default App