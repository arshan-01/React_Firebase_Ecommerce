import React from 'react'
import { useState ,useEffect} from 'react';
import { collection,getDoc,doc } from "firebase/firestore/lite"; 
import {auth} from "../Pages/FirebaseAuthentication/Firebase"
import { firestore_db} from "../Pages/FirebaseAuthentication/Firebase";
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const [User,setUser] = useState({})
  const [Loading,setLoading] = useState(true)
  async function getUser() {
    const ref = doc(firestore_db, "users", auth.currentUser.uid);
    const userDoc = await getDoc(ref);
    // Loading(true)
    setUser (userDoc.data());
    setLoading(false)
  }
  
  useEffect(() => {
    getUser();
  }, [])
  console.log({User})
  return (
    <div>
    {Loading ? <div className="site-card-border-less-wrapper" type="flex" justify="center" align="middle" style={{minHeight: '100%'}}>
    <h5>Loading...</h5>
    </div> : 
    <ProfileCard {...User}/>
    }
    
    </div>
  )
}

export default Profile