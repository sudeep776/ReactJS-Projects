import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'

const Routerexample = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<div>Login</div>}></Route>
      <Route path="*" element={<div>404 error not found</div>}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default Routerexample