import {
  SET_CATEGORIA_FILTRO,
  SET_PRECIO_MIN_FILTRO,
  SET_PRECIO_MAX_FILTRO,
  SET_ORDEN_ALFABETICO,
} from "./actions";

const initialState = {
  categoria: "",
  precioMin: 0,
  precioMax: 500,
  ordenAlfabetico: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIA_FILTRO:
      return { ...state, categoria: action.payload };
    case SET_PRECIO_MIN_FILTRO:
      return { ...state, precioMin: action.payload };
    case SET_PRECIO_MAX_FILTRO:
      return { ...state, precioMax: action.payload };
    case SET_ORDEN_ALFABETICO:
      return { ...state, ordenAlfabetico: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
