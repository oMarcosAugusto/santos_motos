import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src\assets\logo.jfif" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">HOME</a>
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
