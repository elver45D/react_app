// /pages/Bienvenida.jsx
import React from "react";
import { Link } from "react-router-dom";

const Bienvenida = () => {
  return (
    <div>
      <h1>Bienvenida</h1>
      <Link to="/home">Ir a Home</Link>
    </div>
  );
};

export default Bienvenida;
