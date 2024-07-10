import React from "react";
import style from "./MotoCard.module.css";
import ImageCarousel from "./ImageCarousel";

const MotoCard = ({ cards }) => {
  return (
    <div className={style.container_cards}>
      <div className={style.info_new}>
        <h1>Novidades</h1>
      </div>

      {cards.map((card) => (
        <div key={card.id} className={style.card}>
          <ImageCarousel
            images={Array.isArray(card.url) ? card.url : [card.url]}
          />
          <ul className={style.list_info}>
            <li className={style.info_preco}>{card.preco}</li>
            <li className={style.info_ano_km}>
              <span className={style.info_ano}>{card.ano}</span>
              <span className={style.info_km}>{card.km}</span>
            </li>
          </ul>
          <div className={style.btnContainer}>
            <button className={style.btn}>Saiba Mais</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotoCard;
