import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCT_BY_ID,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  TOGGLE_PRODUCT,
} from '../Actions/productsAction';

const initialState = {
  products: [],
  details: [],
  detail: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      console.log(state.products);
      const idProductsDelete = action.payload;
      console.log(idProductsDelete);
      const filterProduct = state.products.data.filter((product) => {
        return product._id !== idProductsDelete;
      });
      return {
        ...state,
        products: filterProduct,
      };

    case UPDATE_PRODUCT:
      const updatedProduct = action.payload;
      console.log(updatedProduct);
      const updatedProducts = state.products.data.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
      updatedProducts;

      return {
        ...state,
        products: updatedProducts,
      };

    case TOGGLE_PRODUCT:
      const statusProducts = state.products.map((product) =>
        product._id === action.payload.id
          ? { ...product, deleted: !product.deleted }
          : product
      );
      return {
        ...state,
        products: statusProducts,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productsReducer;
