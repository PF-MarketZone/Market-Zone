import axios from 'axios'

export const SET_CATEGORIA_FILTRO = "SET_CATEGORIA_FILTRO";
export const SET_PRECIO_MIN_FILTRO = "SET_PRECIO_MIN_FILTRO";
export const SET_PRECIO_MAX_FILTRO = "SET_PRECIO_MAX_FILTRO";
export const SET_ORDEN_ALFABETICO = "SET_ORDEN_ALFABETICO";
export const AGREGAR_AL_CARRITO = "AGREGAR_AL_CARRITO";
export const ELIMINAR_DEL_CARRITO = "ELIMINAR_DEL_CARRITO";
export const SET_INITIAL_CART = "SET_INITIAL_CART";
export const AUMENTAR_CANTIDAD = "AUMENTAR_CANTIDAD";
export const DISMINUIR_CANTIDAD = "DISMINUIR_CANTIDAD";




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

export const agregarAlCarrito = (producto) => {
  return (dispatch, getState) => {
    dispatch({ type: AGREGAR_AL_CARRITO, payload: producto });
    
    const state = getState();
    const carrito = state.filters.cart;
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };
};
export const eliminarDelCarrito = (productoId) => {
  return (dispatch, getState) => {
    dispatch({ type: ELIMINAR_DEL_CARRITO, payload: productoId });

    const state = getState();
    const carrito = state.filters.cart;
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };
};
export const aumentarCantidad = (itemId) => {
  return {
    type: AUMENTAR_CANTIDAD,
    payload: itemId,
  };
};

export const disminuirCantidad = (itemId) => {
  return {
    type: DISMINUIR_CANTIDAD,
    payload: itemId,
  };
};
