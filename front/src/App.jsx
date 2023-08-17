import React, { useState,useEffect  } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TiendaDetalle from "./components/TiendaDetalle/TiendaDetalle";
import Detail from "./View/Detail/Detail";
import Landing from "./View/Landing/Landing";
import Add from "./View/addProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import { useDispatch } from "react-redux";

function App() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    dispatch({ type: 'SET_INITIAL_CART', payload: carrito });
  }, [dispatch]);
  
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="App">
        <Nav onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/home"
            element={<Home categoriaFiltrada={categoriaFiltrada} />}
          />
          <Route path="/add" element={<Add />} />
          <Route path="/:name" element={<TiendaDetalle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
