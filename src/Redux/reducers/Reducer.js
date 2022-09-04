import * as actions from "../actions/actionType"

const InitialState = {
    cart : [],
    products : [],
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
                cart : [...state.cart,action.payload]
            }
        case actions.REMOVE_TO_CART:
            const data = state.cart.filter((e)=> e.id !== action.payload)
            return {
                ...state,
                cart : data,
            }
        default:
            return state;
    }
};