import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas }) => {
  if (tiendas?.length === 0) {
    return (
      <p style={{ color: "black", fontWeight: "bold" }}>
        No se encontraron tiendas.
      </p>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      {tiendas.map((tienda) => (
        <Card
          key={tienda._id}
          _id={tienda._id}
          name={tienda.name}
          image={tienda.image}
          logo={tienda.image}
          description={tienda.description}
        />
      ))}
    </div>
  );
};

export default Cards;
