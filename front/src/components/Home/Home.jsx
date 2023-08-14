import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Home.module.css";
import tiendaData from "../../tiendaData";
import Cards from "../CardsTienda/CardsTienda";

const Home = ({ categoriaFiltrada }) => {
  const tiendasFiltradas = categoriaFiltrada
    ? tiendaData.filter((tienda) =>
        tienda.categories.some((cat) =>
          cat.toLowerCase().includes(categoriaFiltrada.toLowerCase())
        )
      )
    : tiendaData;


    
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <div className={styles.ContainerTienda}>
        <h1>Conoce nuestras Tiendas</h1>
        <Cards tiendas={tiendasFiltradas} />
      </div>
    </div>
  );
};

export default Home;