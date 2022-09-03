import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ProductDetail() {
    const [data ,setdata] = useState([]);
    console.log(data)
    const { id } = useParams();
    
    let product = useSelector((state)=>state.CartReducer.products);
 
  const compare = ()=>{
      let singledata = product.filter((e)=> { 
        return e.id === id
    });
    setdata(singledata)
   
  }

  useEffect(() => {
    compare();
  }, [id])
  
  return (
    <div>
   
    </div>
  )
}

export default ProductDetail