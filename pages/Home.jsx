// /pages/Home.jsx
import React from "react";

const Home = ({ agregarUsuario }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { nombre: "John Doe" }; // Puedes agregar más lógica aquí
    agregarUsuario(usuario);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
};

export default Home;
