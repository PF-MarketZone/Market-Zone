import { combineReducers } from 'redux';
import filtersReducer from './reducers/filtersReducer';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
  filters: filtersReducer,
  auth: authReducer,
  product: productReducer,
  // Otros reducers...
});

export default rootReducer;
