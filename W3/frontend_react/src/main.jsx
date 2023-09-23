import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './Components/Home.jsx'
import './index.css'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

 {/* <App /> */}
    {/* <SignUp/> */}
    {/* <LogIn/> */}
    <RouterProvider router={router} />

    </React.StrictMode>
    
    
)
