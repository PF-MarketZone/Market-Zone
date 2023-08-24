import { combineReducers } from 'redux';
import filtersReducer from './reducers/filtersReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  auth: authReducer,
  // Otros reducers...
});

export default rootReducer;
