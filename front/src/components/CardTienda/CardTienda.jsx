import React from "react";
import styles from "./CardTienda.module.css";

const Card = ({ nombreTienda, logoTienda, categoriaTienda }) => {
  return (
    <div className={styles.card}>
      <img src={logoTienda} alt={nombreTienda} className={styles.logo} />
      <h2>{nombreTienda}</h2>
      <p>{categoriaTienda}</p>
    </div>
  );
};

export default Card;
