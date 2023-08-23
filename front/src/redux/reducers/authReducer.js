import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from "../Actions/authAction"

const isAuthenticatedStored = sessionStorage.getItem('isAuthenticated') === 'true';

const initialState = {
  user: null,
  isAuthenticated: isAuthenticatedStored,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;






