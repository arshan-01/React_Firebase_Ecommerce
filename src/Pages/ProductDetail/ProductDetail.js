import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"
import {  message } from 'antd';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD, REMOVE } from '../../Redux/actions/Action'
function ProductDetail() {
  let product = useSelector((state)=>state.CartReducer.products);
  let cartData = useSelector((state)=>state.CartReducer.cart);
  // console.log(data)
  let { id } = useParams();
  id = parseInt(id);
  
  const [data ,setdata] = useState([]);
  const compare = ()=>{
      let singledata = product.filter((e)=> e.id === id);
    setdata(singledata[0]);
   
  }

  useEffect(() => {
    compare();
  }, [id])
  const dispatch = useDispatch()
  return (
    <div >
       <div class="container mt-5 mb-5" >
      <div class="card" style={{ backgroundColor:"#ffff" }}>
        <div class="row g-0">
          <div class="col-md-6 border-end">
            <div class="d-flex flex-column justify-content-center">
              <div class="main_image">
                <img src={data.image} id="main_product_image" style={{ width:"200px"}}/>
              </div>
              <div class="thumbnail_images" >
                <ul id="thumbnail">
                  <li>
                    <img src={data.image} style={{ width:"30px"}}/>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 right-side">
              <div class="d-flex justify-content-between align-items-center">
                <h3>{data.title}</h3>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                      title="Move to the wish list">
                      <i class="fas fa-heart"></i>
                    </button>
              </div>
              <div class="mt-2 pr-3 content">
                <p>
                  {data.description}
                </p>
              </div>
              <h3>${data.price}</h3>
              <div class="ratings d-flex flex-row align-items-center">
                <div class="d-flex flex-row">
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                  <i class="bx bx-star"></i>
                </div>
                <span>441 reviews</span>
              </div>
              <div class="mt-5">
                <span class="fw-bold">Color</span>
                <div class="colors">
                  <ul id="marker">
                    <li id="marker-1"></li>
                    <li id="marker-2"></li>
                    <li id="marker-3"></li>
                    <li id="marker-4"></li>
                    <li id="marker-5"></li>
                  </ul>
                </div>
              </div>
              <div class="buttons d-flex flex-row mt-5 gap-3">
              {cartData.some((p)=>p.id ===data.id)?
                <Link to="/cart" >
              <button 
              class="btn btn-outline-dark">Buy Now</button>
              </Link>  
                
               : <Link to="/cart" >
              <button onClick={()=> {
                dispatch(ADD(data))
                } }
              class="btn btn-outline-dark">Buy Now</button>
              </Link>

              }
            

                {cartData.some((p)=>p.id ===data.id)?  
                <button onClick={()=> 
                         {dispatch(REMOVE(data.id))
                          message.success('Product removed from cart');
                         }

                         }  class="btn btn-dark">Remove</button>: <button onClick={()=> 
                         {dispatch(ADD(data))
                          message.success('Product added to cart');
                         }

                         }  class="btn btn-dark">Add to Cart</button>} 
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default ProductDetail