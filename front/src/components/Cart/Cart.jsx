import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad,
} from "../../redux/actions";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.filters.cart);
  const details = useSelector((state) => state.filters.details);
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
    </div>
  );
};

export default Cart;
