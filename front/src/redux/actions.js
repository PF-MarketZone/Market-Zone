import axios from 'axios'

export const SET_CATEGORIA_FILTRO = "SET_CATEGORIA_FILTRO";
export const SET_PRECIO_MIN_FILTRO = "SET_PRECIO_MIN_FILTRO";
export const SET_PRECIO_MAX_FILTRO = "SET_PRECIO_MAX_FILTRO";
export const SET_ORDEN_ALFABETICO = "SET_ORDEN_ALFABETICO";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";


export const setCategoriaFiltro = (categories) => ({
  type: SET_CATEGORIA_FILTRO,
  payload: categories,
});

export const setPrecioMinFiltro = (precioMin) => ({
  type: SET_PRECIO_MIN_FILTRO,
  payload: precioMin,
});

export const setPrecioMaxFiltro = (precioMax) => ({
  type: SET_PRECIO_MAX_FILTRO,
  payload: precioMax,
});

export const setOrdenAlfabetico = (orden) => ({
  type: SET_ORDEN_ALFABETICO,
  payload: orden,
});
export const getProductById = (id) => {
  return function (dispatch, getState) {
    const state = getState(); // Obtener el estado actual
    const productDetails = state.details?.find(detail => detail.id === parseInt(id));

    if (productDetails) {
      dispatch({ type: GET_PRODUCT_BY_ID, payload: productDetails });
    } else {
      // Manejar el caso en que el producto no se encuentra en los detalles estáticos
      console.error(`Producto con ID ${id} no encontrado.`);
    }
  };
};

// descomentar esto cuando se tenga la api ⇓ y comentar esto ⇑
/* export const getProductById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`URL_DE_TU_API/product/${id}`);
      const productDetails = response.data;
      dispatch({ type: GET_PRODUCT_BY_ID, payload: productDetails });
    } catch (error) {
      // Manejar el error en caso de que la llamada a la API falle
      console.error("Error al obtener detalles del producto:", error);
    }
  };
};
 */
