export const SET_CATEGORIA_FILTRO = "SET_CATEGORIA_FILTRO";
export const SET_PRECIO_MIN_FILTRO = "SET_PRECIO_MIN_FILTRO";
export const SET_PRECIO_MAX_FILTRO = "SET_PRECIO_MAX_FILTRO";
export const SET_ORDEN_ALFABETICO = "SET_ORDEN_ALFABETICO";

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