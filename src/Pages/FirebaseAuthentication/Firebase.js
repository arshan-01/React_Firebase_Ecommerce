// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAtmu8d9GcOiAatyVtt5ICdbgd7QPcUm4M",
  authDomain: "react-firebase-ecommerce-4a8f3.firebaseapp.com",
  projectId: "react-firebase-ecommerce-4a8f3",
  storageBucket: "react-firebase-ecommerce-4a8f3.appspot.com",
  messagingSenderId: "267552620275",
  appId: "1:267552620275:web:3c2315ab02b084cb82c186",
  measurementId: "G-JLXGD9X21V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore_db = getFirestore(app);
export {auth,analytics,firestore_db}