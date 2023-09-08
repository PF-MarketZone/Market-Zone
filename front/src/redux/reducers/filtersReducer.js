import {
  SET_CATEGORIA_FILTRO,
  SET_PRECIO_MIN_FILTRO,
  SET_PRECIO_MAX_FILTRO,
  SET_ORDEN_ALFABETICO,
  SET_ORDEN_PRECIO,
  AGREGAR_AL_CARRITO,
  ELIMINAR_DEL_CARRITO,
  SET_INITIAL_CART,
  AUMENTAR_CANTIDAD,
  SET_COMPRA_EXITOSA,
  DISMINUIR_CANTIDAD,
  GUARDAR_PRODUCTOS_TEMPORALES,
  SET_COLOR_FILTRO,
  ACTUALIZAR_INFO_D,
} from '../actions';

const initialState = {
  cart: [],
  tempCartItems: [],
  categoriasSeleccionadas: [],
  compraExitosa: false,
  categoria: '',
  precioMin: 0,
  precioMax: 500,
  ordenAlfabetico: '',
  ordenPrecio: '',
  infoDUpdated: false,
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
    case SET_COLOR_FILTRO:
      return { ...state, color: action.payload };
    case AGREGAR_AL_CARRITO:
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === newItem._id
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
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    case SET_INITIAL_CART:
      return { ...state, cart: action.payload };

    case AUMENTAR_CANTIDAD:
      const itemIdToIncrease = action.payload;
      const updatedCartAumentar = state.cart.map((item) =>
        item._id === itemIdToIncrease
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('carrito', JSON.stringify(updatedCartAumentar));
      return {
        ...state,
        cart: updatedCartAumentar,
      };

    case DISMINUIR_CANTIDAD:
      const itemToDecrease = state.cart.find(
        (item) => item._id === action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        const updatedCartDecrease = state.cart.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        localStorage.setItem('carrito', JSON.stringify(updatedCartDecrease));
        return {
          ...state,
          cart: updatedCartDecrease,
        };
      }
      return state;

    case SET_COMPRA_EXITOSA:
      return {
        ...state,
        compraExitosa: action.payload,
      };
    case GUARDAR_PRODUCTOS_TEMPORALES:
      return {
        ...state,
        tempCartItems: action.payload,
      };
    case SET_ORDEN_PRECIO:
      return {
        ...state,
        ordenPrecio: action.payload,
      };
    case ACTUALIZAR_INFO_D:
      return {
        ...state,
        infoDUpdated: false,
      };
    default:
      return state;
  }
};

export default filtersReducer;
