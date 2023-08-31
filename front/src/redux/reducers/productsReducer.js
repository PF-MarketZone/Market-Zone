import { GET_PRODUCTS, 
    ADD_PRODUCT, 
    GET_PRODUCT_BY_ID
} from '../Actions/productsAction';


const initialState = {
    products: [],
    details: [],
    detail: {},
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_BY_ID:
            return {
                    ...state, 
                    detail: action.payload
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