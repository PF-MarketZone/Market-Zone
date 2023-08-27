import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad,
} from "../../redux/actions";
import styles from "./CartSidebar.module.css";
import { Link } from "react-router-dom";

const CartSidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.filters.cart);
  const details = useSelector((state) => state.product.details);
  const dispatch = useDispatch();
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(true);

  const handleAumentarCantidadSidebar = (itemId) => {
    dispatch(aumentarCantidad(itemId));
  };

  const handleDisminuirCantidadSidebar = (itemId) => {
    dispatch(disminuirCantidad(itemId));
  };

  const eliminarProducto = (id) => {
    dispatch(eliminarDelCarrito(id));
  };

  const totalPrecio = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartSidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cartSidebarRef.current &&
        !cartSidebarRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.cartSidebar} ${
        isCartSidebarVisible ? styles.active : ""
      }`}
      ref={cartSidebarRef}
    >
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
                    <div className={styles.quantityButtons}>
                      <button
                        className={styles["quantity-button"]}
                        onClick={() => handleDisminuirCantidadSidebar(item.id)}
                      >
                        -
                      </button>
                      <p className={styles["cart-item-quantity"]}>
                        Cantidad: {item.quantity}
                      </p>
                      <button
                        className={styles["quantity-button"]}
                        onClick={() => handleAumentarCantidadSidebar(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles["cart-item-button"]}
                      onClick={() => eliminarProducto(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.totalPrecio}>
            <span>Total: ${totalPrecio}</span>
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
