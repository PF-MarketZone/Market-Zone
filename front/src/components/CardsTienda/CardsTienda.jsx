import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas }) => {
  return (
    <div className={styles.cardsContainer}>
      {tiendas.map((tienda) => (
        <Card
          key={tienda.id}
          name={tienda.name}
          logo={tienda.logo}
          categories={tienda.categories.join(", ")}
        />
      ))}
    </div>
  );
};

export default Cards;
