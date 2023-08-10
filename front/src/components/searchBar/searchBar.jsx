import React from "react";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  const handleChange = (event) => {
    const { value } = event.target;
    props.onSearch(value);
  };

  return (
    <div className={styles.navbar}>
      <input
        type="search"
        placeholder="Buscar Tienda 🔎"
        className={styles.searchInput}
        onChange={handleChange}
      />
      <button
        className={styles.searchButton}
        onClick={() => props.onSearch("")}
      >
        Limpiar
      </button>
    </div>
  );
}
