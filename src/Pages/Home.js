import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import { Cart } from '../Redux/Context'

// import Hero from '../components/Hero'

function Home() {
//  console.log(products)
  return (
    <div>
    {/* <Hero/> */}
   <ProductCard/>

    </div>
  )
}

export default Home