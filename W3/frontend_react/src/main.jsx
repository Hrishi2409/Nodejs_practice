import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <SignUp/> */}
    <LogIn/>
  </React.StrictMode>,
)
