import * as actions from "../actions/actionType"

const InitialState = {
    cart : [],
    products : [],
    total:0,
}
export const CartReducer = (state = InitialState, action)=>{
    switch (action.type) {
        case actions.FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case actions.ADD_TO_CART:

            return {
                ...state,
                cart: [
                  ...state.cart,
                  {
                    ...action.payload,
                    qty: 1
                  },
                ],
              };
        case actions.REMOVE_TO_CART:
            const data = state.cart.filter((e)=> e.id !== action.payload)
            return {
                ...state,
                cart : data,
            }
        case actions.INCREAMENT_QTY:
            return {
                ...state,
                cart : state.cart.map(item =>
                    item.id === action.payload.id
                      ? { ...item, qty: item.qty + 1 }
                      : item
                  ),
            }
        case actions.DECREAMENT_QTY:
            return {
                ...state,
                cart : 
                state.cart.map(item =>
                    item.id === action.payload.id && item.qty > 1
                      ? { ...item, 
                        qty: item.qty - 1 }
                      : item
                  ),
            }
        default:
            return state;
    }
};