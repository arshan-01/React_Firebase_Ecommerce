import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./cart.css"

function CartPage() {
  let cartData = useSelector((state)=>state.CartReducer.cart);
  console.log(cartData)

  return (
   
<section class="h-100 gradient-custom">
      <div class="container py-5">
        <div class="row d-flex justify-content-center my-4">
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Shopping Cart</h5>
              </div>

              {
          cartData.length>= 1? 
          <div class="card-body Scroll" >
             {
              cartData.map((prod)=>{
                return  <div class="row">
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src={prod.image}
                        class="w-100" alt="Blue Jeans Jacket" />
                      <a href="#!">
                        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}} ></div>
                      </a>
                    </div>
                  
                  </div>
    
                  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    
                    <p><strong>{prod.title}</strong></p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
                    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item">
                      <i class="fas fa-trash"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                      title="Move to the wish list">
                      <i class="fas fa-heart"></i>
                    </button>
                  
                  </div>
    
                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
               
                    <div class="d-flex mb-4" style={{maxWidth: "300px" }}>
                      <button class="btn btn-primary px-3 me-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>
    
                      <div class="form-outline">
                        <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                        <label class="form-label" for="form1">Quantity</label>
                      </div>
    
                      <button class="btn btn-primary px-3 ms-2"
                        >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                    <p class="text-start text-md-center">
                      <strong>${prod.price}</strong>
                    </p>
                  </div>
                  <hr class="my-4"/>
                </div>
              
              })
             }
             
              </div>: 
              <div class="container-fluid  mt-100">
				 <div class="row">
				 
					<div class="col-md-12">
						<div class="card-body cart">
								<div class="col-sm-12 empty-cart-cls text-center">
									<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/>
									<h3><strong>Your Cart is Empty</strong></h3>
									<h4>Add something to make me happy :)</h4>
									<Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
									
								
	
						</div>
				</div>
						
					
					</div>
				 
				 </div>
				
				</div>
        }
              
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p class="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div class="card mb-4 mb-lg-0">
              <div class="card-body">
                <p><strong>We accept</strong></p>
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                  alt="PayPal acceptance mark" />
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="card mb-4  ">
              <div class="card-header py-3 summary">
                <h5 class="mb-0">Summary</h5>
              </div>
              <div class="card-body summary" >
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>
    
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage