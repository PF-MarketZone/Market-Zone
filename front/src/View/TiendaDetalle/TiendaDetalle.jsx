import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import tiendaData from "../../Data/dummyData";
import CardsProductos from "../../components/CardsProductos/CardsProductos";
import {
  setCategoriaFiltro,
  setPrecioMinFiltro,
  setPrecioMaxFiltro,
  setOrdenAlfabetico,
} from "../../redux/actions";
import styles from "./TiendaDetalle.module.css";

const TiendaDetalle = () => {
  const { name } = useParams();
  const tienda = tiendaData.find((tienda) => tienda.name === name);

  if (!tienda) {
    return <p>Tienda no encontrada</p>;
  }

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  useEffect(() => {
    dispatch(setOrdenAlfabetico(selectedOrder));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(setCategoriaFiltro(e.target.value));
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
    dispatch(setPrecioMinFiltro(values[0]));
    dispatch(setPrecioMaxFiltro(values[1]));
  };

  const handleOrderChange = (e) => {
    setSelectedOrder(e.target.value);
    dispatch(setOrdenAlfabetico(e.target.value));
  };

  const minPriceValue = tienda.products.reduce(
    (min, producto) => Math.min(min, producto.price),
    0
  );
  const maxPriceValue = tienda.products.reduce(
    (max, producto) => Math.max(max, producto.price),
    0
  );

  const filteredProductos = tienda.products
    .filter(
      (producto) =>
        !selectedCategory || producto.categories.includes(selectedCategory)
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
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {Array.from(
            new Set(tienda.products.flatMap((producto) => producto.categories))
          ).map((category) => (
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
              handlePriceChange([priceRange[0], parseInt(e.target.value)])
            }
          />
          <p>Precio: ${priceRange[1]}</p>
        </div>
      </div>

      <div className={styles.productosContainer}>
        <h1>{tienda.name}</h1>
        <CardsProductos productos={filteredProductos} />
      </div>
    </div>
  );
};

export default TiendaDetalle;
