import axios from 'axios';
import swal from 'sweetalert';

// Definición de acciones
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const PASSWORD_RESET_REQUEST_SUCCESS= 'PASSWORD_RESET_REQUEST_SUCCESS';
export const PASSWORD_RESET_REQUEST_FAILURE = 'PASSWORD_RESET_REQUEST_FAILURE';
export const CHANGE_PASSWORD_SUCCESS= 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_REQUEST= 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_FAILURE= 'CHANGE_PASSWORD_FAILURE';

// Acción: inicio de sesión exitoso
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Acción: inicio de sesión fallido
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// Acción: cerrar sesión
export const logout = () => ({
  type: LOGOUT,
});

// Acción: iniciar sesión
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud POST con el correo y la contraseña
      const response = await axios.post('http://localhost:3004/api/v1/auth/singin', { email, password });

      // Extraer los datos del usuario y el token de la respuesta
      const user = response.data.user;
      const token = response.data.token;

      // Almacenar el token en el sessionStorage
      sessionStorage.setItem('authToken', token);

      // Almacenar otros datos del usuario si es necesario
      sessionStorage.setItem('user', JSON.stringify(user));

      // Despachar la acción de loginSuccess con los datos del usuario
      dispatch(loginSuccess(user));
    } catch (error) {
      // Manejar el error en caso de que la llamada falle
      console.error('Error al iniciar sesión:', error);
      dispatch(loginFailure());
    }
  };
};

// Acción: verificar registro del usuario
export const checkUserRegistration = (email) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud GET para verificar el registro del usuario
      const response = await axios.get(`/api/check-registration?email=${email}`);
      const isRegistered = response.data.isRegistered;
      const token = response.data.token;  // Obtener el token desde la respuesta

      if (isRegistered) {
        // Si el usuario está registrado, despachar la acción loginSuccess
        dispatch(loginSuccess({ email }));
        // Almacenar el token en el sessionStorage
        sessionStorage.setItem('authToken', token);
      } else {
        // Si el usuario no está registrado, despachar la acción loginFailure
        dispatch(loginFailure());
      }
    } catch (error) {
      // Manejar el error en caso de que la llamada falle
      console.error('Error al verificar el registro del usuario:', error);
      dispatch(loginFailure());
    }
  };
};

//Recuperar contraseña

export const requestPasswordReset = (email) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3004/api/v1/auth/recovery', { email });
    dispatch({ type: PASSWORD_RESET_REQUEST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: PASSWORD_RESET_REQUEST_FAILURE, payload: error.response.data });
  }
};

//reset contraseña



export const changePassword = (token, newPassword) => async (dispatch) => {
 dispatch({ type: CHANGE_PASSWORD_REQUEST});
  
try {
//console.log(token)
    const requestBody = {
      token,
      newPassword,
    };
   // console.log(requestBody);

   await axios.post(
    'http://localhost:3004/api/v1/auth/changePassword',
    requestBody
  );
  window.alert("Contraseña cambiada con exito")
dispatch({ type: CHANGE_PASSWORD_SUCCESS});
console.log("llegue a action sucess")
    
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    dispatch({type:'CHANGE_PASSWORD_FAILURE' , payload: error});
  }
};