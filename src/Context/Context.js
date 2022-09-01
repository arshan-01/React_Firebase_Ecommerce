// import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Data from '../Data';
import { CartReducer } from './Reducer';

const Cart = createContext();

function Context({children}) {

const [products,setproducts] = useState(Data)

//     const getproducts = async ()=> {
//         try {
//             await axios.get('https://fakestoreapi.com/products')
//             .then(res =>{
//                setproducts(res.data) }
//             ) }
//         catch (error) { console.log(error) }
// }
//     useEffect(() => {
//         getproducts();
//     }, [])

    
    const [state, dispatch] = useReducer(CartReducer ,{
        products : products,
        cart : [],
    } );
    console.log(products)
   
  return (
    <Cart.Provider value ={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
} ;