import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const { user } = useSelector((state) => state.auth.user);
  const userRole = user ? user.role : null;

  useEffect(() => {
    axios
      .get("https://market-zone-api-v1.onrender.com/api/v1/order/")
      .then((response) => {
        const ordersData = response.data.data;

        // Obtener la lista de ID de productos de todas las órdenes
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

            // Obtener la lista de ID de usuarios de todas las ordenes
            const userIds = ordersData.map((order) => order.user);

            // Realizar una solicitud para obtener la lista de usuarios basada en los ID
            axios
              .get("https://market-zone-api-v1.onrender.com/api/v1/user/", {
                params: { ids: userIds.join(",") },
              })
              .then((userResponse) => {
                const usersData = userResponse.data.data;
                const usersMap = {};
                usersData.forEach((user) => {
                  usersMap[user._id] = user.name;
                });

                // Filtrar las ordenes segun el rol del usuario
                const filteredOrders =
                  user && user.role.includes("customer")
                    ? ordersData.filter((order) => order.user === user._id)
                    : ordersData;

                // Actualizar las ordenes con los nombres de usuario y nombres de productos
                const ordersWithNames = filteredOrders.map((order) => ({
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
  }, [user]);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // Filtrar las ordenes
  const filteredOrdersByUser = orders.filter(
    (order) => !selectedUser || order.userName === selectedUser
  );

  // Obtener la lista de nombres de usuarios unicos
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
        {filteredOrdersByUser.map((order) => (
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
            {userRole === "admin" && (
              <p className={styles.orderInfo}>Rol del Usuario: {userRole}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
