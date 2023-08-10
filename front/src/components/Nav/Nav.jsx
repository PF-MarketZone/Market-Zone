import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <Link to="/login">
          <button className={styles.button1}>Ingresar</button>
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;

