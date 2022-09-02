import * as actions from "../actions/actionType"

const InitialState = {
    cart : []
}
export const CartReducer = (state = InitialState, action)=>{
    switch (action.type) {
        case actions.ADD_TO_CART:
            return {
                ...state,
                cart : [...state.cart,action.payload]
            }
        default:
            return state;
    }
};