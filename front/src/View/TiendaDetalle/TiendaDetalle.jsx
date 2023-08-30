import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import CardsProductos from "../../components/CardsProductos/CardsProductos";
import {
  setCategoriaFiltro,
  setPrecioMinFiltro,
  setPrecioMaxFiltro,
  setOrdenAlfabetico,
} from "../../redux/actions";
import styles from "./TiendaDetalle.module.css";

const TiendaDetalle = () => {
  const { storeId } = useParams();
  const [productos, setProductos] = useState([]);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  useEffect(() => {
    axios
      .get(`https://market-zone-api-v1.onrender.com/api/v1/product`)
      .then((response) => {
        const productosTienda = response.data.data.filter(
          (producto) => producto.storeId === storeId
        );
        setProductos(productosTienda);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setProductos([]);
      });
  }, [storeId]);

  useEffect(() => {
    dispatch(setCategoriaFiltro(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    dispatch(setPrecioMinFiltro(priceRange[0]));
    dispatch(setPrecioMaxFiltro(priceRange[1]));
  }, [priceRange]);

  useEffect(() => {
    dispatch(setOrdenAlfabetico(selectedOrder));
  }, [selectedOrder]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  const handleOrderChange = (e) => {
    setSelectedOrder(e.target.value);
  };

  const minPriceValue = productos.reduce(
    (min, producto) => Math.min(min, producto.price),
    Infinity
  );
  const maxPriceValue = productos.reduce(
    (max, producto) => Math.max(max, producto.price),
    0
  );

  const obtenerCategoriasUnicas = () => {
    const allCategories = productos.reduce((categories, producto) => {
      return [...categories, producto.categories.category];
    }, []);
    return [...new Set(allCategories)];
  };

  const categoriasUnicas = obtenerCategoriasUnicas();

  const filteredProductos = productos
    .filter(
      (producto) =>
        !selectedCategory || producto.categories.category === selectedCategory
    )
    .filter(
      (producto) =>
        producto.price >= priceRange[0] && producto.price <= priceRange[1]
    )
    .filter(
      (producto) =>
        searchQuery === "" ||
        producto.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (selectedOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else if (selectedOrder === "desc") {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });

  return (
    <div className={styles.tiendaDetalleContainer}>
      <div className={styles.filtrosContainer}>
        <h2>Filtros</h2>
        <select value={selectedCategory._id} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categoriasUnicas.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select value={selectedOrder} onChange={handleOrderChange}>
          <option value="">Sin Orden</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <div className={styles.precioFiltro}>
          <label>Rango de Precio</label>
          <input
            type="range"
            min={minPriceValue}
            max={maxPriceValue}
            value={priceRange[1]}
            onChange={(e) =>
              handlePriceChange([priceRange[0], parseInt(e.target.value) + 2])
            }
          />
          <p>Precio: ${priceRange[1]}</p>
        </div>
      </div>

      <div className={styles.productosContainer}>
        <CardsProductos productos={filteredProductos} />
      </div>
    </div>
  );
};

export default TiendaDetalle;
