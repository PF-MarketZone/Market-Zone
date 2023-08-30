import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import Cards from "../../components/CardsTienda/CardsTienda";

const Home = ({ categoriaFiltrada }) => {

  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    // Hacer la llamada a la API para obtener las tiendas
    axios.get("https://market-zone-api-v1.onrender.com/api/v1/store")
      .then((response) => {
        const tiendasData = response.data.data;
        setTiendas(tiendasData);
      })
      .catch((error) => {
        console.error("Error fetching tiendas:", error);
      });
  }, []);

  const tiendasFiltradas = categoriaFiltrada
    ? tiendas.filter((tienda) =>
        tienda.categories.some((cat) =>
          cat.toLowerCase().includes(categoriaFiltrada.toLowerCase())
        )
      )
    : tiendas;

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