import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Banner.module.css";

import bannerImage1 from "../../images/banner1.png";
import bannerImage2 from "../../images/banner2.png";
import bannerImage3 from "../../images/banner3.png";


const Banner = () => {
  const images = [bannerImage1, bannerImage2, bannerImage3];

  return (
    <div className={styles.bannerContainer}>
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index + 1}`} className={styles.bannerImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

