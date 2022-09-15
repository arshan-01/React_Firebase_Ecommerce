import React from 'react'
import {  useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom'
import ShopLogo from '../assets/ShopLogo.png'
import { onAuthStateChanged, signOut  } from "firebase/auth";
import { getDoc,doc } from "firebase/firestore/lite"; 
import {auth} from "../Pages/FirebaseAuthentication/Firebase"
import { firestore_db} from "../Pages/FirebaseAuthentication/Firebase";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  
  const [User,setUser] = useState(null)
  const [UserId,setUserId] = useState(null)
  // const [Users,setUsers] = useState([])

  const navigate = useNavigate();
  // const AllUser =[];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
        Fetch_Doc(); 
       } else {
        console.log("User is signed out")
      }});
  }, [])
  
  const Fetch_Doc = async()=>{
    const ref = doc(firestore_db, "users", auth.currentUser.uid);
    const userDoc = await getDoc(ref);
    setUser(userDoc.data())
    };
    console.log(User)
    // compare();
 
// const compare = ()=>{  
//   let filterUser = Users.filter((x) => x.id === UserId);
//      setUser(filterUser[0]);
//   }

  let cartData = useSelector((state)=>state.CartReducer.cart);
  
  function LogoutHandle() {
    signOut(auth);
    navigate('/');
    setUser(null)
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

      {/* Profile Icon If user logged  */}
      {/* <div className="dropdown">
        <Link
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <Link className="dropdown-item" to="/Login">Log In</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/Register">Sign up</Link>
          </li>
          
        </ul>
      </div>  */}
{/* Profile Icon If user logged  */}


  {User ?<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    {/* My Account */}
    {User&&User.fname}
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