import React from 'react'
import {  useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom'
import ShopLogo from '../assets/ShopLogo.png'
import { onAuthStateChanged, signOut  } from "firebase/auth";

import {auth} from "../Pages/FirebaseAuthentication/Firebase"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  
  const [User,setUser] = useState(null)
 
  const navigate = useNavigate();
  // const AllUser =[];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
       } else {
       
        console.log("User is signed out")
      }});
  }, [])
    console.log(User)

  let cartData = useSelector((state)=>state.CartReducer.cart);
  
  function LogoutHandle() {
    signOut(auth);
    setUser(null)
    navigate('/');
  }


  // console.log(UserId)
  // console.log(User)
  return (
    <div className='mb-8'>
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">

  <div className="container">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <Link className="navbar-brand mt-2 mt-lg-0 " to="/">
        <img 
          src={ShopLogo}
          height="30"
          width="100"
          alt=" ShopLogo"
          loading="lazy"
        />
      </Link>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">Products </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
     
    <div class="input-group rounded w-50">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
<br/>
    </div>
   
    <div className="d-flex align-items-center">
     
      <Link className="text-reset me-3" to="/cart">
      <ShoppingCartIcon />
        {
          cartData.length>= 1? 
        <span className="badge rounded-pill badge-notification bg-danger">{cartData.length}</span> : <span className="badge rounded-pill badge-notification bg-danger"></span>
        }

      </Link>


  {User ?<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    {/* My Account */}
    {User&&User.displayName}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <Link to='/Profile'> <li><button class="dropdown-item" type="button">My Profile </button></li></Link>
  <Link to="/"><li><button onClick={LogoutHandle} class="dropdown-item" type="button">Sign out</button></li></Link>
  </ul> 
    </div>
  :<div>
   <Link to='/Login'><button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark">Sign In</button></Link>
   <Link to="/Register"><button type="button" class="btn btn-primary ms-2">Sign Up</button></Link>
   </div>
  }
</div>

    
  </div>
  
</nav>

    </div>
  )
}

export default Navbar