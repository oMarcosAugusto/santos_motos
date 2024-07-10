import React from "react";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="src\assets\logo.jfif" alt="Logo" />
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="contact">MOTOS</a>
          </li>
          <li>
            <a href="contact">NOVIDADES</a>
          </li>
          <li>
            <a href="about">SOBRE NÓS</a>
          </li>

          <li>
            <a href="contact">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
