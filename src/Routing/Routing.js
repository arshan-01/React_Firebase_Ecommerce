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
import Checkout from '../Pages/Checkout/Checkout';
import Login from '../Pages/FirebaseAuthentication/Login';
import Register from '../Pages/FirebaseAuthentication/Register';
import Profile from '../Pages/Profile';
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
      <Route path={`/ProductDetail/:id`} element={<ProductDetail/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Footer/>
  </div>
  </BrowserRouter>
    
  )
}

export default Routing