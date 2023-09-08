import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import Cards from "../../components/CardsTienda/CardsTienda";
import SearchBar from "../../components/searchBar/searchBar";

const Home = () => {
  const [tiendas, setTiendas] = useState([]);
  const [nombreTiendaFiltrado, setNombreTiendaFiltrado] = useState("");

  const handleSearch = (nombreTienda) => {
    setNombreTiendaFiltrado(nombreTienda);
  };

  useEffect(() => {
    // Borrar los valores del localStorage cuando se navega a /home
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("selectedOrder");
    localStorage.removeItem("selectedPriceOrder");
    localStorage.removeItem("selectedColor");
  }, []);

  useEffect(() => {
    // Hacer la llamada a la API para obtener las tiendas
    axios
      .get("https://market-zone-api-v1.onrender.com/api/v1/store")
      .then((response) => {
        const tiendasData = response.data.data;
        setTiendas(tiendasData);
      })
      .catch((error) => {
        console.error("Error fetching tiendas:", error);
      });
  }, []);

  const tiendasFiltradas = nombreTiendaFiltrado
    ? tiendas.filter((tienda) =>
        tienda.name.toLowerCase().includes(nombreTiendaFiltrado.toLowerCase())
      )
    : tiendas;

  return (
    <div className={styles.homeContainer}>
      <Banner />
      <div className={styles.ContainerTienda}>
        <h1>Conoce nuestras Tiendas</h1>
        <SearchBar onSearch={handleSearch} />
        <Cards tiendas={tiendasFiltradas} />
      </div>
    </div>
  );
};

export default Home;
