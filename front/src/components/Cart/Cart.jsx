import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eliminarDelCarrito } from "../../redux/actions";
import styles from "./Cart.module.css";

const Cart = () => {
  const carrito = useSelector((state) => state.cart);
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const eliminarProducto = (id) => {
    dispatch(eliminarDelCarrito(id));
  };

  return (
    <div className={styles["cart-container"]}>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item) => {
            const detail = details.find((detail) => detail.id === item.id);
            return (
              <li key={item.id} className={styles["cart-item"]}>
                {detail && <img src={detail.images[0]} alt={detail.name} />}
                <div className={styles["cart-item-content"]}>
                  <p className={styles["cart-item-title"]}>{item.name}</p>
                  <p className={styles["cart-item-price"]}>
                    Precio: ${item.price}
                  </p>
                  <p className={styles["cart-item-quantity"]}>
                    Cantidad: {item.quantity}
                  </p>
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
      )}
    </div>
  );
};

export default Cart;
