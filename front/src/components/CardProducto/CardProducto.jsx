import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CardProducto.module.css";

const CardProducto = ({ name, stock, images, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${name}-image-${index}`} className={styles.image} />
            </div>
          ))}
        </Carousel>
      </div>
      <h2>{name}</h2>
      <p>Stock: {stock}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default CardProducto;


