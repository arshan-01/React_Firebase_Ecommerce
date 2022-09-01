import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import { CartState } from '../Context/Context'
// import Hero from '../components/Hero'

function Home() {
 const {state : {products},} =  CartState();
 console.log(products)
  return (
    <div>
    {/* <Hero/> */}
    <div className='container'>

    <div className=" row ">
    {
      products.map((prod)=>{
        return <ProductCard prod = {prod} key= {prod.id}/>
      })
    }
    </div>
    </div>

    </div>
  )
}

export default Home