import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Blog from "./components/Blog";
import Eventos from "./components/Eventos";
import Footer from "./components/Footer";
import { ThemeProvider } from "./src/context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Navbar />
      <Menu />
      <Reservas />
      <Blog />
      <Eventos />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
