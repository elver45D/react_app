import React from "react";
import "./Eventos.css"; // ✅ Importa el CSS
import cenaMaridaje from "../images/almuerzo-maridaje-peruano-1024x1024.png";
import nocheCriolla from "../images/musica-en-vivo-patron.jpg";
import buffetTrabajo from "../images/Crowne-Plaza-Lima-presenta-su-temporada-de-Sancochado-invierno-2024.jpg";

const eventos = [
  {
    title: "Cena maridaje con vino peruano",
    date: "15 de Abril",
    image: cenaMaridaje,
    description:
      "Una noche de gastronomía exclusiva maridada con los mejores vinos peruanos.",
  },
  {
    title: "Noche criolla con música en vivo",
    date: "25 de Abril",
    image: nocheCriolla,
    description:
      "Revive las tradiciones de la música criolla en una noche llena de ritmo y emoción.",
  },
  {
    title: "Buffet por el Día del Trabajo",
    date: "1 de Mayo",
    image: buffetTrabajo,
    description:
      "Disfruta de una gran variedad de platos peruanos e internacionales.",
  },
];

function Eventos() {
  return (
    <section id="eventos">
      <h2>Próximos Eventos</h2>
      <ul className="eventos-lista">
        {eventos.map((evento, index) => (
          <li key={index} className="evento-card">
            <strong>{evento.date}</strong>
            <h3>{evento.title}</h3>
            <img src={evento.image} alt={evento.title} />
            <p>{evento.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Eventos;
