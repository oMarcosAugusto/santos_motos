import React from "react";
import "./MotoCard.css";
import ImageCarousel from "./ImageCarousel";

const MotoCard = ({ cards }) => {
  return (
    <div className="container_cards">
      <div className="info_new">
        <h1>Novidades</h1>
      </div>

      {cards.map((card) => (
        <div key={card.id} className="card">
          <ImageCarousel
            images={Array.isArray(card.url) ? card.url : [card.url]}
          />
          <ul className="list_info">
            <li className="info_preco">{card.preco}</li>
            <li className="info_ano_km">
              <span className="info_ano">{card.ano}</span>
              <span className="info_km">{card.km}</span>
            </li>
          </ul>
          <div className="btn-container">
            <button className="btn">Saiba Mais</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotoCard;
