import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import CardsProductos from "../../components/CardsProductos/CardsProductos";
import {
  setCategoriaFiltro,
  setOrdenAlfabetico,
  setOrdenPrecio,
} from "../../redux/actions";
import styles from "./TiendaDetalle.module.css";

const TiendaDetalle = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || ""
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [selectedOrder, setSelectedOrder] = useState(
    localStorage.getItem("selectedOrder") || ""
  );
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(
    localStorage.getItem("selectedPriceOrder") || ""
  );

  useEffect(() => {
    // Guardar los valores de los filtros en el estado local
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("searchQuery", searchQuery);
    localStorage.setItem("selectedOrder", selectedOrder);
    localStorage.setItem("selectedPriceOrder", selectedPriceOrder);
  }, [selectedCategory, searchQuery, selectedOrder, selectedPriceOrder]);

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
    dispatch(setOrdenPrecio(selectedPriceOrder));
  }, [selectedPriceOrder]);

  useEffect(() => {
    dispatch(setOrdenAlfabetico(selectedOrder));
  }, [selectedOrder]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSelectedOrder(e.target.value);
  };

  const handlePriceOrderChange = (e) => {
    setSelectedPriceOrder(e.target.value);
  };

  const obtenerCategoriasUnicas = () => {
    const allCategories = productos.reduce((categories, producto) => {
      return [...categories, producto.categories.category];
    }, []);
    return [...new Set(allCategories)];
  };

  const categoriasUnicas = obtenerCategoriasUnicas();

  // Filtrar productos por categoría, precio y búsqueda
  const filteredProductos = productos
    .filter(
      (producto) =>
        !selectedCategory || producto.categories.category === selectedCategory
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
    })
    .sort((a, b) => {
      if (selectedPriceOrder === "asc") {
        return a.price - b.price;
      } else if (selectedPriceOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    <div className={styles.tiendaDetalleContainer}>
      <div className={styles.filtrosContainer}>
        <h2>Filtros</h2>
        <label>Categoría:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categoriasUnicas.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Ordenar por Nombre:</label>
        <select value={selectedOrder} onChange={handleOrderChange}>
          <option value="">Sin Orden</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <div className={styles.precioFiltro}>
          <label>Ordenar por Precio:</label>
          <select value={selectedPriceOrder} onChange={handlePriceOrderChange}>
            <option value="">Sin Orden</option>
            <option value="asc">De menor precio a mayor precio</option>
            <option value="desc">De mayor precio a menor precio</option>
          </select>
        </div>
      </div>

      <div className={styles.productosContainer}>
        <CardsProductos productos={filteredProductos} />
      </div>
    </div>
  );
};

export default TiendaDetalle;
