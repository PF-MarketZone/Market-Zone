import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState({});
  const [products, setProducts] = useState({});
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios
      .get("https://market-zone-api-v1.onrender.com/api/v1/order/")
      .then((response) => {
        const ordersData = response.data.data;
        const userIds = ordersData.map((order) => order.user);

        axios
          .get("https://market-zone-api-v1.onrender.com/api/v1/user/")
          .then((userResponse) => {
            const usersData = userResponse.data.data;
            const usersMap = {};
            usersData.forEach((user) => {
              usersMap[user._id] = user.name;
            });
            setUsers(usersMap);

            // Obtener la lista de ID de productos de todas las ordenes
            const productIds = ordersData.reduce(
              (ids, order) => [...ids, ...order.products],
              []
            );

            // Realizar una solicitud para obtener la lista de productos basada en los ID
            axios
              .get("https://market-zone-api-v1.onrender.com/api/v1/product/", {
                params: { ids: productIds.join(",") },
              })
              .then((productResponse) => {
                const productsData = productResponse.data.data;
                const productsMap = {};
                productsData.forEach((product) => {
                  productsMap[product._id] = product.name;
                });
                setProducts(productsMap);

                // Actualizar las ordenes con los nombres de usuario y nombres de productos
                const ordersWithNames = ordersData.map((order) => ({
                  ...order,
                  userName:
                    usersMap[order.user] || "Nombre de usuario no encontrado",
                  productNames: order.products.map(
                    (productId) =>
                      productsMap[productId] ||
                      "Nombre de producto no encontrado"
                  ),
                }));
                setOrders(ordersWithNames);
              });
          });
      });
  }, []);

  // Función para manejar cambios en el usuario seleccionado
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // Filtrar las órdenes según el usuario seleccionado
  const filteredOrders = orders.filter(
    (order) => !selectedUser || order.userName === selectedUser
  );

  // Obtener la lista de nombres de usuarios únicos
  const uniqueUserNames = Array.from(
    new Set(orders.map((order) => order.userName))
  );

  return (
    <div className={styles.container}>
      <h1>Órdenes</h1>
      <div className={styles.filterContainer}>
        <select
          value={selectedUser}
          onChange={handleUserChange}
          className={styles.selectInput}
        >
          <option value="">Todos los usuarios</option>
          {uniqueUserNames.map((userName, index) => (
            <option key={index} value={userName}>
              {userName}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredOrders.map((order) => (
          <li key={order._id} className={styles.order}>
            <p className={styles.orderInfo}>ID de la Orden: {order._id}</p>
            <p className={styles.orderInfo}>
              Nombre del Usuario: {order.userName}
            </p>
            <p className={styles.orderInfo}>Productos:</p>
            <ul className={styles.productList}>
              {order.productNames.map((productName, index) => (
                <li key={index} className={styles.productListItem}>
                  {productName}
                </li>
              ))}
            </ul>
            <p className={styles.orderInfo}>
              Total: ${parseInt(order.totalPrice)}
            </p>
            <p className={styles.orderInfo}>
              Método de Pago: {order.paymentMethod}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
