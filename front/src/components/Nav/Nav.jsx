import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={onSearch} />
        </div>
        <Link to="/add">
          <button className={styles.button1}>Crear Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;


