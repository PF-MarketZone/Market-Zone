import { GET_PRODUCTS, 
    ADD_PRODUCT, 
    GET_PRODUCT_BY_ID,
    DELETE_PRODUCT
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
        case DELETE_PRODUCT:
            const updateProducts = state.products.filter((product) => {
               return product.id !== action.payload
            });
            return{
                ...state,
                products: updateProducts
            }
        default:
            return{
                ...state
            }
    }
}

export default productsReducer;