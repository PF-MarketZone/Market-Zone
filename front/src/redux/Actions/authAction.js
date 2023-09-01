import axios from 'axios';

// Definición de acciones
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const ACTIVE_SESSION = 'ACTIVE_SESSION'; //Valida si hay session activa o no

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

// Acción: inicio de sesión fallido
export const activeSession = (session) => ({
  type: ACTIVE_SESSION,
  payload: session,
});

// Acción: iniciar sesión
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud POST con el correo y la contraseña
      const response = await axios.post(
        'http://localhost:3004/api/v1/auth/singin',
        { email, password }
      );

      // Extraer los datos del usuario y el token de la respuesta
      const user = response.data;

      // Almacenar otros datos del usuario si es necesario
      sessionStorage.setItem('session-mz', JSON.stringify(user));

      // Despachar la acción de loginSuccess con los datos del usuario
      dispatch(loginSuccess(user));
      return true;
    } catch (error) {
      // Manejar el error en caso de que la llamada falle
      console.error('Error al iniciar sesión:', error);
      dispatch(loginFailure());
      return false;
    }
  };
};

// Acción: verificar registro del usuario
export const checkUserRegistration = (email) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud GET para verificar el registro del usuario
      const response = await axios.get(
        `/api/check-registration?email=${email}`
      );
      const isRegistered = response.data.isRegistered;
      const token = response.data.token; // Obtener el token desde la respuesta

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

//Validamos si hay sesion activa en el storage
export const sessionActive = () => {
  return async (dispatch) => {
    try {
      // Extraemos los datos del session storage
      const user = sessionStorage.getItem('session-mz');

      if (user) {
        const userObject = JSON.parse(user);
        dispatch(activeSession({ user: userObject, auth: true }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//Funcion Logout
export const logoutFn = (head) => {
  return async (dispatch) => {
    console.log({ headers: { head } });
    try {
      const response = await axios({
        url: 'http://localhost:3004/api/v1/user/singout',
        method: 'post',
        headers: {
          Authorization: head.Authorization,
          'refresh-token': head['refresh-token'],
        },
      });
      console.log(response);
      if (response.data.closed) {
        dispatch(logout());
        console.log('me fui');
        return true;
      }
    } catch (error) {
      console.log('error de algo', error);
    }
  };
};

//Funcion Refresh token
export const refreshAccessToken = (refreshtkn) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'http://localhost:3004/api/v1/auth/refresh-tkn',
        method: 'post',
        headers: {
          'refresh-token': refreshtkn,
        },
      });

      if (response.data.token) {
        const user = JSON.parse(sessionStorage.getItem('session-mz'));
        user.token = response.data.token;
        user.refreshToken = response.data.refreshToken;
        console.log(user);
        dispatch(loginSuccess(user));
        console.log('refresque');
      }
    } catch (error) {
      console.log('error al refrescar el tkn', error);
    }
  };
};
