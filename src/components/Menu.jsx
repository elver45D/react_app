import React from "react";
import ceviche from "../images/ceviche.jpg";
import lomoSaltado from "../images/lomo-saltado.jpeg";

const menuItems = [
  {
    title: "Ceviche Clásico",
    image: ceviche,
    description:
      "Pescado fresco marinado en limón con cebolla roja, ají limo y cilantro.",
  },
  {
    title: "Lomo Saltado",
    image: lomoSaltado,
    description:
      "Jugosos trozos de carne salteados con cebolla, tomate y papas fritas.",
  },
];

function Menu() {
  return (
    <section id="menu">
      <h2>Nuestro Menú</h2>
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Menu;
