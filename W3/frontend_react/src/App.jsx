import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { AppBar, Button, styled } from '@mui/material'



// somewhere else


function App() {
 
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between"}} className='navBar'>
    <div style={{color:"black",fontWeight:"bold",textDecoration:"underline",textDecorationColor:"#a435f0",textDecorationThickness:"3px"}}>
        STUDYEMY</div>
      <div>
        <Button variant="contained" color='secondary'sx={{fontWeight:"bold",mr:2}}>Sign-Up</Button>
        <Button variant="outlined" color='secondary'sx={{fontWeight:"bold"}}>Log-In</Button>
        </div>
    </div>
      


    </>
  )
}


export default App