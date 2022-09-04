import * as action from "./actionType";



export const FETCH_PRODUCT = (fetchproducts)=>{
        return {
            type : action.FETCH_PRODUCT,
            payload : fetchproducts,
        }
}

export const ADD = (products)=>{
        return {
            type : action.ADD_TO_CART,
            payload : products,
        }
}
export const REMOVE = (id)=>{
    console.log(id)
        return {
            type : action.REMOVE_TO_CART,
            payload : id,
        }
}