import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
} from "../../redux/actions";
import styles from "./CartSidebar.module.css";

const CartSidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.filters.cart);
  const productDetails = useSelector((state) => state.products.details);
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
  const prevCartItems = useRef(cartItems);

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
              const detail = productDetails.find(
                (product) => product._id === item._id
              );
              return (
                <li key={item._id} className={styles.cartItem}>
                  {detail && detail.image && detail.image[0] && (
                    <img src={detail.image[0].url} alt={detail.name} />
                  )}
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
                      onClick={() => eliminarProducto(item._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.totalPrecio}>
            <span>Total: ${parseInt(totalPrecio)}</span>
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
