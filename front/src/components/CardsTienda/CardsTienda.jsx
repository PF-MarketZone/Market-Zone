import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas }) => {
  return (
    <div className={styles.cardsContainer}>
      {tiendas.map((tienda) => (
        <Card
          key={tienda.idTienda}
          nombreTienda={tienda.NombreTienda}
          logoTienda={tienda.logoTienda}
          categoriaTienda={tienda.CategoriaTienda}
        />
      ))}
    </div>
  );
};

export default Cards;
