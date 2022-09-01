import React from 'react'
import "./ProductCard.css"
function ProductCard({prod}) {
    console.log(prod)
  return (
      <div class=' col-12 col-sm-6 col-md-4 mt-5'>
              <div class="card ">
                <div class="card-badge">Hot</div>
                <div class="product-tumb">
                  <img src={prod.image} alt=""/>
                </div>
                <div class="product-details">
                  <span class="product-catagory">{prod.category}</span>
                  <h4><a href="">{prod.title}</a></h4>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
                  <div class="product-bottom-details">
                    <div class="product-price"><small>$96.00</small>${prod.price}</div>
                    <div class="product-links">
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-shopping-cart"></i>
                    </div>
                
                </div>
              </div>
              </div>
              </div>

  
  )
}

export default ProductCard