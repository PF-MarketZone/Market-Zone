import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getProducts = () => {
    return function(dispatch){
            fetch('http://localhost:3004/api/v1/product')
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_PRODUCTS, 
                payload: data 
            })
        )}
            
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
        const response = await axios.get(`http://localhost:3004/api/v1/product/${id}`);
        const productDetails = response.data.data;
        console.log(productDetails);
        dispatch({ type: GET_PRODUCT_BY_ID, payload: productDetails });
      } catch (error) {
        // Manejar el error en caso de que la llamada a la API falle
        console.error("Error al obtener detalles del producto:", error);
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
          'http://localhost:3004/api/v1/product/createproduct',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        return response.data;
      } catch (error) {
        console.log('El Producto no ha sido creado');
        throw error;
      }
    };
  };
  