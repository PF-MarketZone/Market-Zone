import React from "react";
import Card from "../CardTienda/CardTienda";
import styles from "./CardsTienda.module.css";

const Cards = ({ tiendas, categoriaFiltrada }) => {
  // Filtrar tiendas según la categoría seleccionada
  const tiendasFiltradas = categoriaFiltrada
    ? tiendas.filter((tienda) =>
        tienda.categories.some((cat) => cat === categoriaFiltrada)
      )
    : tiendas;

  // Asegurémonos de que haya tiendas para mostrar
  if (tiendasFiltradas.length === 0) {
    return <p>No hay tiendas disponibles para la categoría seleccionada.</p>;
  }

  return (
    <div className={styles.cardsContainer}>
      {tiendasFiltradas.map((tienda) => (
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


