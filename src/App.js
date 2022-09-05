import 'antd/dist/antd.css'; 
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { FETCH_PRODUCT } from "./Redux/actions/Action";
import axios from "axios";
import Routing from './Routing/Routing';
import Spinner from './components/Spinner/Spinner';

function App() {
    const [loading,setloading] = useState(true);
    
  const dispatch = useDispatch();
  useEffect(() => {
      const unsub = async () => {
          try {
              const res = await axios.get("https://fakestoreapi.com/products");
              if (res.status === 200) {
                setloading(false)
                  dispatch(FETCH_PRODUCT(res.data));
              }
          } catch (error) {
              console.log(error.message);
          }
      };
      unsub();
  }, []);

  // Spinner
  if (loading) {
    return <Spinner/>
}
  
// If page is not in loading state, display page.
else {
    return <Routing />
}
  
}

export default App;
