import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TiendaDetalle from "./components/TiendaDetalle/TiendaDetalle";

function App() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  return (
    <div className="App">
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home categoriaFiltrada={categoriaFiltrada} />} />
        <Route path="/:name" element={<TiendaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;

