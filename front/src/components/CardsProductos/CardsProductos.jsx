import React from "react";
import CardProducto from "../CardProducto/CardProducto";
import styles from "./CardsProductos.module.css";


const CardsProductos = ({ productos, categoriaFiltrada }) => {
  // Filtrar productos por categoría si se proporciona una categoría filtrada
  const productosFiltrados = categoriaFiltrada
    ? productos.filter((producto) =>
      producto.categories.includes(categoriaFiltrada)
    )
    : productos;
  
  return (
    <div className={styles.cardsContainer}>
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <CardProducto
            key={producto.id}
            id={producto.id}
            name={producto.name}
            stock={producto.stock}
            images={producto.images}
            price={producto.price}
          />
        ))
      )
        : (
          <p>No se encontraron productos para esta categoría.</p>
        )}
    </div>
  );
};

export default CardsProductos;

