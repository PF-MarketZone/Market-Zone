import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUsers, FaChartBar } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";
import {
  MdOutlineCreateNewFolder,
  MdOutlineShoppingCartCheckout,
  MdStore,
} from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const Side = styled.div`
  width: 250px;
  background-color: #8b3dff;
  color: #fff;
  padding: 15px;
  height: 100vh;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "yellow" : "white")};
  font-size: 25px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 10px;
  }
`;

const Sidebar = ({ handleComponentClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const role = useSelector((state) => state.auth.user?.user?.role);

  const handleClick = (componentName) => {
    handleComponentClick(componentName);
    setActiveButton(componentName);
  };

  return (
    <div>
      <Side>
        <MenuItem
          isActive={activeButton === "products"}
          onClick={() => handleClick("products")}
        >
          <LiaProductHunt />
          Productos
        </MenuItem>

        {role && (role.includes("admin") || role.includes("seller")) && (
          <MenuItem
            isActive={activeButton === "add store"}
            onClick={() => handleClick("add store")}
          >
            <MdStore />
            Crear Tienda
          </MenuItem>
        )}

        {role && (role.includes("admin") || role.includes("seller")) && (
          <MenuItem
            isActive={activeButton === "add products"}
            onClick={() => handleClick("add products")}
          >
            <MdOutlineCreateNewFolder />
            Crear Producto
          </MenuItem>
        )}

        {role && role.includes("admin") && (
          <MenuItem
            isActive={activeButton === "users"}
            onClick={() => handleClick("users")}
          >
            <FaUsers />
            Clientes
          </MenuItem>
        )}

        <MenuItem
          isActive={activeButton === "orders"}
          onClick={() => handleClick("orders")}
        >
          <MdOutlineShoppingCartCheckout />
          Ordenes
        </MenuItem>

        <MenuItem
          isActive={activeButton === "reviews"}
          onClick={() => handleClick("reviews")}
        >
          <AiOutlineStar />
          Reseñas
        </MenuItem>

        {role && (role.includes("admin") || role.includes("seller")) && (
          <MenuItem
            isActive={activeButton === "sales"}
            onClick={() => handleClick("sales")}
          >
            <FaChartBar />
            Ventas
          </MenuItem>
        )}
      </Side>
    </div>
  );
};

export default Sidebar;
