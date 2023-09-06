import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
} from "../../redux/actions";
import styles from "./Cart.module.css";

const Cart = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-30f4d3f9-4b95-410f-b2fd-331973191e15"); // ingresar Public key comprador

  const cartItems = useSelector((state) => state.filters.cart);
  const dispatch = useDispatch();

  const eliminarProducto = (id) => {
    dispatch(eliminarDelCarrito(id));
  };

  const handleAumentarCantidad = (itemId) => {
    dispatch(aumentarCantidad(itemId));
  };

  const handleDisminuirCantidad = (itemId) => {
    dispatch(disminuirCantidad(itemId));
  };

  const handleAgregarAlCarrito = (product) => {
    dispatch(agregarAlCarrito(product));
    const updatedCart = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const totalPrecio = cartItems.reduce((total, item) => {
    return parseInt(total + item.price * item.quantity);
  }, 0);

  const createPreference = async (cartItems) => {
    try {
      const items = cartItems.map((item) => {
        // console.log(item._id);
        return {
          id: item._id,
          title: item.name,
          unit_price: parseInt(item.price),
          quantity: item.quantity,
          currency_id: "COP",
        };
      });

      const response = await axios.post(
        "https://market-zone-api-v1.onrender.com/api/v1/create-order/create-preference",
        { items }
      );
      const id = response.data.data;
      return id;
    } catch (error) {
      console.error(response.data.message);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference(cartItems);
    if (id) {
      localStorage.setItem("tempCartItems", JSON.stringify(cartItems));
      setPreferenceId(id);
    }
  };

  return (
    <div className={styles["cart-container"]}>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className={styles["cart-list-container"]}>
          <ul className={styles["cart-list"]}>
            {cartItems.map((item) => (
              <li key={item._id} className={styles["cart-item"]}>
                {item.image && item.image[0] && (
                  <img
                    src={item.image[0].url}
                    alt={item.name}
                    className={styles["cart-item-image"]}
                  />
                )}
                <div className={styles["cart-item-content"]}>
                  <p className={styles["cart-item-title"]}>{item.name}</p>
                  <p className={styles["cart-item-price"]}>
                    Precio: ${parseInt(item.price)}
                  </p>
                  <div className={styles["cart-item-quantity"]}>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() => handleDisminuirCantidad(item._id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() => handleAumentarCantidad(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles["cart-item-delete"]}
                    onClick={() => eliminarProducto(item._id)}
                  >
                    <BsTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles["cart-total"]}>
            <p>
              Total: <span>${totalPrecio}</span>
            </p>
          </div>
        </div>
      )}
      <button className={styles["cart-buy"]} onClick={handleBuy}>
        Comprar
      </button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default Cart;
