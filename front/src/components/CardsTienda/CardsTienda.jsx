import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas, categoriaFiltrada }) => {
  // Filtrar tiendas según la categoría seleccionada
  const tiendasFiltradas = categoriaFiltrada
    ? tiendas.filter((tienda) =>
        tienda.description.some((cat) => cat === categoriaFiltrada)
      )
    : tiendas;

  if (tiendasFiltradas.length === 0) {
    return <p>No hay tiendas disponibles para la categoría seleccionada.</p>;
  }

  return (
    <div className={styles.cardsContainer}>
      {tiendasFiltradas.map((tienda) => (
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


