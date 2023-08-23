import { useState } from "react";
import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad,
} from "../../redux/actions";
import styles from "./Cart.module.css";

const Cart = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-30f4d3f9-4b95-410f-b2fd-331973191e15");

  const cartItems = useSelector((state) => state.cart);
  const details = useSelector((state) => state.details);
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
  const totalPrecio = cartItems.reduce((total, item) => {
    const detail = details.find((detail) => detail.id === item.id);
    if (detail && detail.price) {
      return total + detail.price * item.quantity;
    }
    return total;
  }, 0);

  const createPreference = async (cartItems) => {
    try {
      const items = cartItems
        .map((item) => {
          const detail = details.find((d) => d.id === item.id);
          if (detail) {
            return {
              title: detail.name,
              unit_price: detail.price,
              quantity: item.quantity,
              currency_id: "COP",
            };
          }
          return null;
        })
        .filter((item) => item !== null);

      const response = await axios.post(
        "http://localhost:3004/api/v1/create-preference",
        { items }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error("Error creating preference:", error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference(cartItems);
    if (id) {
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
            {cartItems.map((item) => {
              const detail = details.find((detail) => detail.id === item.id);
              return (
                <li key={item.id} className={styles["cart-item"]}>
                  {detail && <img src={detail.images[0]} alt={detail.name} />}
                  <div className={styles["cart-item-content"]}>
                    <p className={styles["cart-item-title"]}>{item.name}</p>
                    <p className={styles["cart-item-price"]}>
                      Precio: $
                      {detail && detail.price ? detail.price.toFixed(2) : "N/A"}
                    </p>
                    <div className={styles["cart-item-quantity"]}>
                      <button
                        className={styles["quantity-button"]}
                        onClick={() => handleDisminuirCantidad(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles["quantity-button"]}
                        onClick={() => handleAumentarCantidad(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles["cart-item-delete"]}
                      onClick={() => eliminarProducto(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
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
