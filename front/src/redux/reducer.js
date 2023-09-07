import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import filtersReducer from './reducers/filtersReducer';
import productsReducer from './reducers/productsReducer';
// import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  auth: authReducer,
  // user: userReducer,
  products: productsReducer,
  details: productsReducer,
  detail: productsReducer,
  // Otros reducers...
});

export default rootReducer;
