import {
    GET_PRODUCT_BY_ID,
} from '../Actions/ProductAction';

const initialState = {
    details: [],
    detail: {},
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return {
                ...state, detail: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;