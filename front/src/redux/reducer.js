import {
  SET_CATEGORIA_FILTRO,
  SET_PRECIO_MIN_FILTRO,
  SET_PRECIO_MAX_FILTRO,
} from "./actions";

const initialState = {
  categoria: "",
  precioMin: 0,
  precioMax: 1000,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIA_FILTRO:
      return { ...state, categoria: action.payload };
    case SET_PRECIO_MIN_FILTRO:
      return { ...state, precioMin: action.payload };
    case SET_PRECIO_MAX_FILTRO:
      return { ...state, precioMax: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
