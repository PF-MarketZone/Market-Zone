import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Home.module.css";
import tiendasData from "../../tiendaData";
import Cards from "../CardsTienda/CardsTienda";

const Home = ({ categoriaFiltrada }) => {
    const tiendasFiltradas = categoriaFiltrada
    ? tiendasData.filter((tienda) => tienda.CategoriaTienda === categoriaFiltrada)
    : tiendasData;

  return (
    <div className={styles.homeContainer}>
      <Banner />
      <div className={styles.ContainerTienda}>
        <h1>Tiendas Destacadas</h1>
        <Cards tiendas={tiendasFiltradas} />
      </div>
    </div>
  );
};

export default Home;

