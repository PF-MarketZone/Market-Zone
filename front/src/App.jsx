import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TiendaDetalle from "./components/TiendaDetalle/TiendaDetalle";
import Detail from './View/Detail/Detail'
import Landing from "./View/Landing/Landing";
import Add from "./View/addProduct/AddProduct";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  return (
    <>
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>

        <div>
          {location.pathname === '/' ? null : <Nav onSearch={handleSearch} />}
        </div>
        
        <Routes>
          <Route path="/" element={<Landing />} />


          <Route path="/home" element={<Home categoriaFiltrada={categoriaFiltrada} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/:name" element={<TiendaDetalle />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );

}
export default App;

