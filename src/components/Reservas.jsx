import React, { useState } from "react";
import "./Reservas.css"; // ✅ Importando el CSS específico

function Reservas() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "",
    mensaje: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 5000);
  };

  return (
    <section id="reservas">
      <h2>Reserva tu mesa</h2>

      {successMessage && (
        <div className="success-message">
          <p>¡Reserva realizada con éxito!</p>
          <h3>Datos de tu reserva:</h3>
          <ul>
            <li>
              <strong>Nombre:</strong> {formData.nombre}
            </li>
            <li>
              <strong>Email:</strong> {formData.email}
            </li>
            <li>
              <strong>Teléfono:</strong> {formData.telefono}
            </li>
            <li>
              <strong>Fecha:</strong> {formData.fecha}
            </li>
            <li>
              <strong>Hora:</strong> {formData.hora}
            </li>
            <li>
              <strong>Personas:</strong> {formData.personas}
            </li>
            <li>
              <strong>Mensaje:</strong> {formData.mensaje || "Ninguno"}
            </li>
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          required
          value={formData.telefono}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fecha"
          required
          value={formData.fecha}
          onChange={handleChange}
        />
        <input
          type="time"
          name="hora"
          required
          value={formData.hora}
          onChange={handleChange}
        />
        <select
          name="personas"
          required
          value={formData.personas}
          onChange={handleChange}
        >
          <option value="">Número de personas</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Mensaje adicional (opcional)"
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Reservar</button>
      </form>
    </section>
  );
}

export default Reservas;
