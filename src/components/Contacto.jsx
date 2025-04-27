import React, { useState } from "react";
import "./Contacto.css"; // ✅

function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => setMensajeEnviado(false), 3000);
    e.target.reset(); // ✅ Limpia el formulario después de enviar
  };

  return (
    <section id="contacto">
      <h2>Contáctanos</h2>

      {mensajeEnviado && (
        <div className="mensaje-exito">
          ¡Su mensaje llegó con éxito, más rato lo atenderemos!
        </div>
      )}

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          required
        ></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;
