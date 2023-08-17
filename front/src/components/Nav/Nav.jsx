import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";
import { useSelector } from "react-redux";

const Nav = ({ onSearch }) => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={onSearch} />
        </div>
        <Link to="/add">
          <button className={styles.button1}>Crear Producto</button>
        </Link>
        <Link to="/cart">
          <button className={styles.button2}>Carrito ({cartItems.length})</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;