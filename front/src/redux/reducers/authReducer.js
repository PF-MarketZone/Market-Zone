import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ACTIVE_SESSION,
} from '../Actions/authAction';

const isAuthenticatedStored = !!sessionStorage.getItem('session-mz');

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
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case ACTIVE_SESSION:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.auth,
      };

    default:
      return state;
  }
};

export default authReducer;
