import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    PASSWORD_RESET_REQUEST_SUCCESS,
    PASSWORD_RESET_REQUEST_FAILURE,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_FAILURE
} from "../Actions/authAction"

const isAuthenticatedStored = sessionStorage.getItem('isAuthenticated') === 'true';

const initialState = {
  user: null,
  isAuthenticated: isAuthenticatedStored,
  loading: false,
  error: null,
  success: false,
  successMessage: '',
  resetRequestSuccess: false,
  resetRequestError: null
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
     
  case PASSWORD_RESET_REQUEST_SUCCESS:
      return {
        ...state,
        resetRequestSuccess: true,
        resetRequestError: null,
      };
    case PASSWORD_RESET_REQUEST_FAILURE:
      return {
        ...state,
        resetRequestSuccess: false,
        resetRequestError: action.payload,
      };

    case CHANGE_PASSWORD_REQUEST:
        console.log("llegue CHANGE_PASSWORD_REQUEST'")
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      console.log("llegue CHANGE_PASSWORD_SUCCESS'")
      return {
        ...state,
        loading: false,
        success: true,
        successMessage: 'Contraseña cambiada exitosamente.',
        
      
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        successMessage: '',
       
      };
      default:
        return state;
    };
    
};

export default authReducer;






