import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Navbar from '../components/Navbar';
import About from '../Pages/About';


import Cart from '../Pages/Cart';
import Contact from '../Pages/Contact';

import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
function Routing() {
  return (
      <BrowserRouter>
    <div> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  </div>
  </BrowserRouter>
    
  )
}

export default Routing