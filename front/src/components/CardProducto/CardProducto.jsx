import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CardProducto.module.css";
import { Link } from 'react-router-dom';


const CardProducto = ({ id, name, stock, images, price }) => {
  console.log("Product ID:", id)
  return (
    <div className={styles.card}>
          <Link className={styles.LinkCar} to={{
            pathname: `/detail/${id}`,
            state: { productDetails: { id, name, stock, images, price } }
          }}>
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
    </Link>
    </div>
  );
};

export default CardProducto;


