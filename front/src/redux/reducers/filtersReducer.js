import {
  SET_CATEGORIA_FILTRO,
  SET_PRECIO_MIN_FILTRO,
  SET_PRECIO_MAX_FILTRO,
  SET_ORDEN_ALFABETICO,
  AGREGAR_AL_CARRITO,
  ELIMINAR_DEL_CARRITO,
  SET_INITIAL_CART,
  AUMENTAR_CANTIDAD,
  SET_COMPRA_EXITOSA,
  DISMINUIR_CANTIDAD,
} from "../actions";

const initialState = {
  cart: [],
  categoriasSeleccionadas: [],
  compraExitosa: false,
  categoria: "",
  precioMin: 0,
  precioMax: 500,
  ordenAlfabetico: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIA_FILTRO:
      return { ...state,  categoria: action.payload };
    case SET_PRECIO_MIN_FILTRO:
      return { ...state, precioMin: action.payload };
    case SET_PRECIO_MAX_FILTRO:
      return { ...state, precioMax: action.payload };
    case SET_ORDEN_ALFABETICO:
      return { ...state, ordenAlfabetico: action.payload };
    case AGREGAR_AL_CARRITO:
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        const existingItem = updatedCart[existingItemIndex];
        existingItem.quantity += newItem.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, newItem] };
      }
    case ELIMINAR_DEL_CARRITO:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case SET_INITIAL_CART:
      return { ...state, cart: action.payload };
    case AUMENTAR_CANTIDAD:
      const updatedCartAumentar = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("carrito", JSON.stringify(updatedCartAumentar));
      return {
        ...state,
        cart: updatedCartAumentar,
      };

    case DISMINUIR_CANTIDAD:
      const updatedCartDisminuir = state.cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("carrito", JSON.stringify(updatedCartDisminuir));
      return {
        ...state,
        cart: updatedCartDisminuir,
      };
    case SET_COMPRA_EXITOSA:
      return {
        ...state,
        compraExitosa: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
