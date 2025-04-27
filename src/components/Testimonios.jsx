import React from "react";
import "./Testimonios.css"; // (opcional si quieres ponerle estilos)

function Testimonios() {
  return (
    <section id="testimonios">
      <h2>Testimonios</h2>
      <div className="testimonios-container">
        <div className="testimonio">
          <p>
            "La mejor experiencia gastronómica que he tenido. ¡Volveremos
            pronto!"
          </p>
          <h4>- Ana Pérez</h4>
        </div>
        <div className="testimonio">
          <p>"Comida deliciosa y atención de primera. Recomendado al 100%."</p>
          <h4>- Luis Fernández</h4>
        </div>
        <div className="testimonio">
          <p>"El ambiente, los sabores, todo fue increíble. ¡Gracias!"</p>
          <h4>- María González</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
