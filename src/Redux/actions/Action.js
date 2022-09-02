import * as action from "./actionType";
export const ADD = (products)=>{
        return {
            type : action.ADD_TO_CART,
            payload : products,
        }
}
export const REMOVE = (products)=>{
        return {
            type : action.REMOVE_TO_CART,
            payload : products,
        }
}