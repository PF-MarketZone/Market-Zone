import React, { useState } from "react";
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
        <Link to="/login">
          <button className={styles.button1}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;


