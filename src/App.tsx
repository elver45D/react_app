import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Blog from "./components/Blog";
import Eventos from "./components/Eventos";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css"; // Sólo App.css aquí
import Nosotros from "./components/Nosotros";
import Equipo from "./components/Equipo";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Navbar />
      <Menu />
      <Reservas />
      <Blog />
      <Eventos />
      <Nosotros />
      <Equipo />
      <Testimonios />
      <Contacto />
    </ThemeProvider>
  );
}

export default App;
