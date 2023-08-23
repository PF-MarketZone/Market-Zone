import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eliminarDelCarrito, agregarAlCarrito } from "../../redux/actions";
import styles from "./CartSidebar.module.css";
import { Link } from "react-router-dom";

const CartSidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.filters.cart);
  const details = useSelector((state) => state.filters.details);
  const dispatch = useDispatch();

  const eliminarProducto = (id) => {
    dispatch(eliminarDelCarrito(id));
  };

  const totalPrecio = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartSidebar}>
      <div className={styles.cartHeader}>
        <h2>Carrito de Compras</h2>
        <button className={styles.closeButton} onClick={onClose}>
          Cerrar carrito
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className={styles.cartListContainer}>
          <ul className={styles.cartList}>
            {cartItems.map((item) => {
              const detail = details.find((detail) => detail.id === item.id);
              return (
                <li key={item.id} className={styles.cartItem}>
                  {detail && <img src={detail.images[0]} alt={detail.name} />}
                  <div>
                    <p>{item.name}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => eliminarProducto(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.totalPrecio}>
            <span>Total: ${totalPrecio.toFixed(2)}</span>
          </div>
        </div>
      )}
      <Link to="/cart">
        <button className={styles.finalizarPedidoButton} onClick={onClose}>
          Finalizar Pedido
        </button>
      </Link>
    </div>
  );
};

export default CartSidebar;
