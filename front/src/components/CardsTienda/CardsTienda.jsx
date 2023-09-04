import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas }) => {
  if (tiendas.length === 0) {
    return <p>No hay tiendas disponibles para la categoría seleccionada.</p>;
  }

  return (
    <div className={styles.cardsContainer}>
      {tiendas.map((tienda) => (
        <Card
          key={tienda._id}
          _id={tienda._id}
          name={tienda.name}
          logo={tienda.image}
          description={tienda.description} 
        />
      ))}
    </div>
  );
};

export default Cards;


