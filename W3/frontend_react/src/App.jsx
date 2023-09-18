import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({ children }) => {
  console.log(children)
  return (
    <button>
      please, my
        {children}
      are starving
    </button>
  )
}

// somewhere else


function App() {
 
  return (
    <>
      <Button >
       <h1>Children</h1>
      </Button>
    </>
  )
}


export default App