import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CardProducto.module.css";
import { Link } from "react-router-dom";

const CardProducto = ({ _id, name, stock, image, price }) => {
  console.log("Product ID:", _id);
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Carousel>
          {image.map((img, index) => (
            <div key={index}>
              <img
                src={img.url}
                alt={`${name}-image-${index}`}
                className={styles.image}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Link
        className={styles.LinkCar}
        to={{
          pathname: `/detail/${_id}`,
          state: { productDetails: { _id, name, stock, image, price } },
        }}
      >
        <h2>{name}</h2>
        <p>Stock: {stock}</p>
        <p>Precio: ${price}</p>
      </Link>
    </div>
  );
};

export default CardProducto;
