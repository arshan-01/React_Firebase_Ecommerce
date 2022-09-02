import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Data from '../../Data'
import { ADD } from '../../Redux/actions/Action'
import "./ProductCard.css"

function ProductCard() {
  const [products,setproducts] = useState(Data)
   const dispatch = useDispatch()
  
  return (
    <div className='container'>
    <div className=" row mt-5">
    {
      products.map((prod)=>{
        
        return <div class=' col-12 col-sm-6 col-md-4 ' key={prod.id}>
              <div class="card mt-5">
                <div class="card-badge">Hot</div>
                <div class="product-tumb">
                  <img src={prod.image} alt=""/>
                </div>
                <div class="product-details">
                  <span class="product-catagory">{prod.category}</span>
                  <h4><Link to="">{prod.title}</Link></h4>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
                  <div class="product-bottom-details col-12">
                    <div class="product-price "><small>$96.00</small>${prod.price}</div>
                    <div class="product-links">
                      <i class="fa fa-heart"></i>
                      <i onClick={()=> dispatch(ADD(prod))} class="fa fa-shopping-cart"></i>
                    </div>
                
                </div>
              </div>
                </div>
              </div>
        
      })
    }
     
              </div>
              </div>

  
  )
}

export default ProductCard