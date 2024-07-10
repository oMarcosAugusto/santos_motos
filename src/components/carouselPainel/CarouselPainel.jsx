import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Carousel.module.css";
import data from "../../data.json"; // Importe os dados do arquivo JSON local
const CarouselPainel = ({ images }) => {
  return (
    <div className={style.carousel}>
      {/*  Renderiza o Carousel apenas quando estiver pronto e houver imagens */}
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image) => (
          <div key={image.id} className={style.carousel_slide}>
            <img src={`${image.url}`} alt={image.legend} />
            <p className={style.legend}>{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPainel;
