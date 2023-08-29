import React from "react";
import CardProducto from "../CardProducto/CardProducto";
import styles from "./CardsProductos.module.css";


const CardsProductos = ({ productos }) => {
  return (
    <div className={styles.cardsContainer}>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <CardProducto
            key={producto._id}
            _id={producto._id} 
            name={producto.name}
            stock={producto.stock}
            image={producto.image} 
            price={producto.price}
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default CardsProductos;

