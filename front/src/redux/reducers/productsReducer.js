import { GET_PRODUCTS, ADD_PRODUCT } from "../Actions/productAction";


const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default productsReducer;