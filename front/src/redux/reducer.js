import { combineReducers } from 'redux';
import filtersReducer from './reducers/filtersReducer';
import authReducer from './reducers/authReducer';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  auth: authReducer,
  products: productsReducer,
  details: productsReducer,
  detail: productsReducer,
  // Otros reducers...
});

export default rootReducer;
