import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState(null);

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  return (
    <div className="App">
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home categoriaFiltrada={categoriaFiltrada} />} />
      </Routes>
    </div>
  );
}

export default App;

