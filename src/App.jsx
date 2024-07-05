import React from "react";
import { useEffect, useState } from "react";

import Menu from "./components/menu/Menu";
import CarouselPainel from "./components/carouselPainel/CarouselPainel";
import MotoCard from "./components/motoCard/MotoCard";

const App = () => {
  const [data, setData] = useState([]);
  const [carouselReady, setCarouselReady] = useState(false); // Estado para controlar a renderização do carousel

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`src\\data.json`);
        if (!response.ok) {
          throw new Error("Erro ao carregar dados");
        }
        const dataJson = await response.json();
        setData(dataJson);

        setCarouselReady(true); // Marca o carousel como pronto após o carregamento das imagens
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    fetchImages(); // chama a funcao novamente
  }, []);

  return (
    <>
      <Menu />
      {carouselReady && <CarouselPainel images={data.images} />}

      {carouselReady && <MotoCard cards={data.motoCards} />}
    </>
  );
};

export default App;
