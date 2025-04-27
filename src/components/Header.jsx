import React from "react";
import portada from "../images/21317750-portada-de-menú-de-un-restaurante-con-vajilla-para-el-diseño.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={portada}
        alt="Portada del Restaurante"
        className="portada-img"
      />
      <h1>Restaurante El Buen Sabor</h1>
      <p>¡Donde cada plato es una experiencia!</p>
    </header>
  );
}

export default Header;
