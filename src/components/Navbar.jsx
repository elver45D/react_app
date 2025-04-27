import React from "react";
import "./Navbar.css"; // 👈 importante para los estilos

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#menu">Menú</a>
        </li>
        <li>
          <a href="#reservas">Reservas</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#eventos">Eventos</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#equipo">Nuestro Equipo</a>
        </li>
        <li>
          <a href="#testimonios">Testimonios</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
