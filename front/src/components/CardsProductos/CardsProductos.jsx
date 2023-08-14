import React from "react";
import CardProducto from "../CardProducto/CardProducto";
import styles from "./CardsProductos.module.css";

const CardsProductos = ({ productos }) => {
  return (
    <div className={styles.cardsContainer}>
      {productos.map((producto) => (
        <CardProducto
          key={producto.id}
          name={producto.name}
          stock={producto.stock}
          images={producto.images}
          price={producto.price}
        />
      ))}
    </div>
  );
};

export default CardsProductos;

