import axios from "axios";
import { backendUrl } from "../../deployConfig";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getProducts = () => {

    return function(dispatch){
            fetch(`${backendUrl}/product` )
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_PRODUCTS, 
                payload: data 
            })
        )}

  };
};
// descomentar esto cuando se tenga la api ⇓ y comentar esto ⇑
export const getProductById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://market-zone-api-v1.onrender.com/api/v1/product/${id}`
      );
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
        if (key === "image") {
          payload[key].forEach((image) => {
            formData.append("image", image);
          });
        } else {
          formData.append(key, payload[key]);
        }
      }

      const response = await axios.post(
        "https://market-zone-api-v1.onrender.com/api/v1/createproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("El Producto no ha sido creado");
      throw error;
    }
  };
};
