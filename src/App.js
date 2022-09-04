import 'antd/dist/antd.css'; 
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { FETCH_PRODUCT } from "./Redux/actions/Action";
import axios from "axios";
import Routing from './Routing/Routing';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      const unsub = async () => {
          try {
              const res = await axios.get("https://fakestoreapi.com/products");
              if (res.status === 200) {
                  dispatch(FETCH_PRODUCT(res.data));
              }
          } catch (error) {
              console.log(error.message);
          }
      };
      unsub();
  }, []);
  return <Routing />;
}

export default App;
