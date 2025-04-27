import React from "react";
import "./Equipo.css"; // 👈 (crea este archivo para los estilos)

function Equipo() {
  return (
    <section id="equipo" className="equipo-section">
      <h2>Conoce a Nuestro Equipo</h2>
      <div className="equipo-container">
        <div className="equipo-card">
          <h3>Chef Juan Pérez</h3>
          <p>Especialista en cocina peruana tradicional.</p>
        </div>
        <div className="equipo-card">
          <h3>Chef Ana Morales</h3>
          <p>Amante de la fusión moderna de sabores.</p>
        </div>
        <div className="equipo-card">
          <h3>Mesero Luis García</h3>
          <p>Servicio atento y personalizado para cada cliente.</p>
        </div>
        <div className="equipo-card">
          <h3>Gerente María López</h3>
          <p>Pasión por la excelencia y la satisfacción del cliente.</p>
        </div>
      </div>
    </section>
  );
}

export default Equipo;
