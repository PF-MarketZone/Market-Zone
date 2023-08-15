import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TiendaDetalle from "./components/TiendaDetalle/TiendaDetalle";
import Detail from './View/Detail/Detail'
import Landing from "./View/Landing/Landing";
import AddProduct from './View/addProduct/AddProduct';

function App() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
    <div className="App">
      
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add" element={<AddProduct/>} />

        <Route path="/home" element={<Home categoriaFiltrada={categoriaFiltrada} />} />
        <Route path="/:name" element={<TiendaDetalle />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
    </>
  );
  
}
export default App;

