function Titel() {
  const nombre = "Alumnos del V semestre -Ingenieria de Software -Seminario";
  if (nombre) {
    return <p>Hola{nombre}</p>;
  }
  return <p>Alumnos de otra carrera</p>;
}
export default Titel;
