import React from 'react';
import Banner from "../Banner/Banner"
import styles from './Home.module.css';


const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <Banner />
        <h1>Bienvenido a la Página de Inicio</h1>
        <h1>Bienvenido a la Página de Inicio</h1>
      </div>
    );
  };
  
  export default Home;