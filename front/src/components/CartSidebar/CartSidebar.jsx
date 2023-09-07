import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
} from "../../redux/actions";
import styles from "./CartSidebar.module.css";
import { BsTrash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.filters.cart);
  const dispatch = useDispatch();
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

  const handleAumentarCantidadSidebar = (itemId, stock) => {
    const cartItem = cartItems.find((item) => item._id === itemId);

    if (cartItem.quantity + 1 <= stock) {
      dispatch(aumentarCantidad(itemId));
    } else {
      toast.error(
        "No puedes agregar más de este producto. Stock insuficiente."
      );
    }
  };

  const handleDisminuirCantidadSidebar = (itemId) => {
    dispatch(disminuirCantidad(itemId));
  };

  const eliminarProducto = (id) => {
    localStorage.removeItem("temporaryStock");
    dispatch(eliminarDelCarrito(id));
  };

  const totalPrecio = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`${styles.cartSidebar} ${
        cartItems.length > 0 ? styles.active : ""
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
            {cartItems.map((item) => (
              <li key={item._id} className={styles.cartItem}>
                {item.image && item.image.length > 0 && (
                  <img src={item.image[0].url} alt={item.name} />
                )}
                <div>
                  <p>{item.name}</p>
                  <p>Precio: ${parseInt(item.price)}</p>
                  <div className={styles.quantityButtons}>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() => handleDisminuirCantidadSidebar(item._id)}
                    >
                      -
                    </button>
                    <p className={styles["cart-item-quantity"]}>
                      Cantidad: {item.quantity}
                    </p>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() =>
                        handleAumentarCantidadSidebar(item._id, item.stock)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles["cart-item-button"]}
                    onClick={() => eliminarProducto(item._id)}
                  >
                    <BsTrash />
                  </button>
                </div>
              </li>
            ))}
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
      <ToastContainer /> 
    </div>
  );
};

export default CartSidebar;
