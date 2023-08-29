import axios from "axios";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

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
  