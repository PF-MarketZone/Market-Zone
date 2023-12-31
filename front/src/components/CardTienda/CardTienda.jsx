import React from "react";
import styles from "./CardTienda.module.css";
import { Link } from "react-router-dom";


const Card = ({ name, logo, categories }) => {

  const slug = name
  .split(" ")
  .map((word, index) =>
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )
  .join("");

  return (
    <Link to={`/${name}`}>
      <div className={styles.card}>
        <img src={logo} alt={name} className={styles.logo} />
        <h2>{name}</h2>
        <p>{categories}</p>
      </div>
    </Link>
  );
};

export default Card;
