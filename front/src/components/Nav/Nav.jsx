import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";
import { useSelector } from "react-redux";
import CartSidebar from "../CartSidebar/CartSidebar";

const Nav = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart);
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);

  const toggleCartSidebar = () => {
    setCartSidebarVisible(!isCartSidebarVisible);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={onSearch} />
        </div>
        <Link to="/add">
          <button className={styles.button1}>Crear Producto</button>
        </Link>
        <div className={styles.cartButtonContainer}>
          <button
            className={styles.button2}
            onClick={toggleCartSidebar}
          >
            Carrito ({cartItems.length})
          </button>
          {isCartSidebarVisible && (
            <div className={styles.cartSidebarOverlay}>
              <CartSidebar onClose={toggleCartSidebar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;



