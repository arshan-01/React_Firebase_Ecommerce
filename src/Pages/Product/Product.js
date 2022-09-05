import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

function Product() {
  return (
    <div>
    <Header title = "Product" sub="Order here"/>
    <ProductCard/>
    </div>
  )
}

export default Product