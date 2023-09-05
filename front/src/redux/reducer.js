import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import filtersReducer from "./reducers/filtersReducer";
import productsReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  auth: authReducer,
  products: productsReducer
  // Otros reducers...
});

export default rootReducer;
