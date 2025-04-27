// /pages/Gracias.jsx
import React from "react";

const Gracias = ({ usuarios }) => {
  return (
    <div>
      <h1>Gracias por registrarte</h1>
      <p>Total de usuarios: {usuarios.length}</p>
    </div>
  );
};

export default Gracias;
