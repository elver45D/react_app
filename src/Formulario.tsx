import { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    carrera: "",
    semestre: "",
    correo: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [contadorCambios, setContadorCambios] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setContadorCambios((prev) => prev + 1);

    // Ejemplo: validación en tiempo real para el nombre
    if (name === "nombre" && value.length > 0 && value.length < 3) {
      setMensaje("El nombre debe tener al menos 3 caracteres");
    } else {
      setMensaje("");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      console.log(`Campo "${name}" llenado con: ${value}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Datos enviados:\n
Nombre: ${formData.nombre}
Apellido: ${formData.apellido}
Carrera: ${formData.carrera}
Semestre: ${formData.semestre}
Correo: ${formData.correo}`);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>Formulario</h2>
      <p style={{ color: "#ccc" }}>Total de cambios: {contadorCambios}</p>
      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nombre"
          style={inputStyle}
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Apellido"
          style={inputStyle}
        />
        <input
          type="text"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Carrera"
          style={inputStyle}
        />
        <input
          type="text"
          name="semestre"
          value={formData.semestre}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Semestre"
          style={inputStyle}
        />
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Correo Electrónico"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Enviar
        </button>
      </form>
    </div>
  );
}

// Estilos oscuros
const containerStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#121212",
};

const formStyle = {
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "15px",
  padding: "20px",
  backgroundColor: "#1e1e1e",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(34, 196, 207, 0.5)",
};

const inputStyle = {
  padding: "12px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #555",
  backgroundColor: "#2c2c2c",
  color: "#fff",
  outline: "none",
};

const buttonStyle = {
  padding: "12px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#4CAF50",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default Formulario;
