import axios from 'axios';
import { backendUrl } from '../../config.js';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

export const getProducts = () => {
  return function (dispatch) {
    fetch(`${backendUrl}/product`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error('Error al recuperar datos:', error);
      });
  };
};

/* export const getProductById = (id) => {
    return function (dispatch, getState) {
      const state = getState(); // Obtener el estado actual
      const productDetails = state.product.details?.find(detail => detail.id === parseInt(id));

      if (productDetails) {
        dispatch({ type: GET_PRODUCT_BY_ID, payload: productDetails });
      } else {
        // Manejar el caso en que el producto no se encuentra en los detalles estáticos
        console.error(`Producto con ID ${id} no encontrado.`);
      }
    };
  }; */

// descomentar esto cuando se tenga la api ⇓ y comentar esto ⇑
export const getProductById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${backendUrl}/product/${id}`);
      const productDetails = response.data.data;
      console.log(productDetails);
      dispatch({ type: GET_PRODUCT_BY_ID, payload: productDetails });
    } catch (error) {
      // Manejar el error en caso de que la llamada a la API falle
      console.error('Error al obtener detalles del producto:', error);
    }
  };
};

export const postProducts = (payload) => {
  return async function (dispatch) {
    try {
      const formData = new FormData();

      for (const key in payload) {
        if (key === 'image') {
          payload[key].forEach((image) => {
            formData.append('image', image);
          });
        } else {
          formData.append(key, payload[key]);
        }
      }
      const response = await axios.post(
        `${backendUrl}/product/createproduct`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('El Producto no ha sido creado');
      throw error;
    }
  };
};

export const createStore = (payload, tkn, rtkn) => {
  return async function (dispatch) {
    try {
      const formData = new FormData();

      for (const key in payload) {
        if (key === 'image') {
          payload[key].forEach((image) => {
            formData.append('image', image);
          });
        } else {
          formData.append(key, payload[key]);
        }
      }

      const response = await axios.post(
        `${backendUrl}/store/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${tkn}`,
            'refresh-token': rtkn,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log('El Producto no ha sido creado');
      throw error;
    }
  };
};

export const updateProduct = (payload) => {
  console.log(payload);
  return async function (dispatch) {
    try {
      const formData = new FormData();
      payload.oldImages = JSON.stringify(payload.oldImages);

      for (const key in payload) {
        if (key === 'image') {
          payload[key].forEach((image) => {
            formData.append('image', image);
          });
        } else {
          formData.append(key, payload[key]);
        }
      }

      const infoData = await axios.post(
        `${backendUrl}/product/update`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      getProducts();
    } catch (error) {
      console.error('El producto no ha sido actualizado', error);
      throw error;
    }
  };
};

export const deleteProducts = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${backendUrl}/product/remove/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
      return response.data;
    } catch (error) {
      console.log('No se puede eliminar el producto', error);
      throw error;
    }
  };
};

export const toogleProduct = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`${backendUrl}/product/${id}`);
      if (response.status === 200) {
        dispatch({
          type: TOGGLE_PRODUCT,
          payload: { id },
        });
      } else {
        console.log('No se pudo cambiar el estado del producto');
      }
    } catch (error) {
      console.log('Error al cambiar el estado del producto', error);
    }
  };
};
