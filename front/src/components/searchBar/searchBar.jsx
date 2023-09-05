import React from "react";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  const handleChange = (event) => {
    const { value } = event.target;
    props.onSearch(value.toLowerCase());
  };

  return (
    <div className={styles.navbar}>
      <input
        type="search"
        placeholder="🔎 Buscar tienda"
        className={styles.searchInput}
        onChange={handleChange}
      />
    </div>
  );
}

