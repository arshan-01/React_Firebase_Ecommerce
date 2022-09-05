import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Navbar from '../components/Navbar';
import Product from '../Pages/Product/Product';
import About from '../Pages/About';
import CartPage from '../Pages/Cart/Cart';
import Contact from '../Pages/Contact/Contact';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';
import Footer from '../Pages/Footer/Footer';
function Routing() {
  return (
      <BrowserRouter>
    <div> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path={`/ProductDetail/:id`} element={<ProductDetail/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Footer/>
  </div>
  </BrowserRouter>
    
  )
}

export default Routing