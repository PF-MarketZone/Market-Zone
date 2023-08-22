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
  const [preferenceId, setpreferenceId] = useState(null);
  initMercadoPago("TEST-fd21ae3e-cbfb-4bdd-aac1-9595813bbe13");

  const createPreference = async () => {
    try {
      const response = await axios.post("link del back", {
        description: "producto",
        price: 100,
        quantity: 1,
        currency_id: "USD",
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setpreferenceId(id);
    }
  };

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
              Total: <span>${totalPrecio.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
      <button className={styles["cart-buy"]} onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default Cart;
