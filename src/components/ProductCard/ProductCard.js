import { message, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ADD, REMOVE } from "../../Redux/actions/Action";
import "./ProductCard.css";

function ProductCard() {
  let products = useSelector((state) => state.CartReducer.products);
  let cartData = useSelector((state) => state.CartReducer.cart);
  console.log(products);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className=" row mt-5">
        {products.map((prod) => {
          return (
            <div class=" col-6 col-sm-6 col-md-4 col-lg-3 " key={prod.id}>
              <div class="card mt-5 productCard-card">
                <div class="card-badge">Sale</div>
                <div class="product-tumb">
                <Image
                    // width={200}
                    src={prod.image}
                  />
                </div>
                <div class="product-details">
                  <span class="product-catagory">{prod.category}</span>
                  <h4>
                    <Link to={`/ProductDetail/${prod.id}`}>{prod.title}</Link>
                  </h4>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
                  <div class="product-bottom-details col-12">
                    <div class="product-price ">
                      <small>$96.00</small>${prod.price}
                    </div>
                    <div class="product-links">
                      <i class="fa fa-heart"></i>
                      {cartData.some((p) => p.id === prod.id) ? (
                        <i
                          title="Remove from cart"
                          onClick={() => {
                            dispatch(REMOVE(prod.id));
                            message.success("Product removed from cart");
                          }}
                          class="fa fa-shopping-cart"
                          style={{ color: "#fbb72c" }}
                        ></i>
                      ) : (
                        <i
                          title="Add to cart"
                          onClick={() => {
                            dispatch(ADD(prod));
                            message.success("Product added to cart");
                          }}
                          class="fa fa-shopping-cart"
                        ></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
