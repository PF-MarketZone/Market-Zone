import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUsers, FaChartBar } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineCreateNewFolder,
  MdOutlineShoppingCartCheckout,
  MdStore,
} from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const Side = styled.div`
  width: 230px;
  background-color: #bbbbbb;
  color: #fff;
  padding: 10px;
  height: 98vh;
  transition: width 0.3s ease
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "white" : "black")};
  font-size: 23px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  transition: background-color 0.3s ease, padding 0.3s ease;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #ccc;
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
          isActive={activeButton === "profile"}
          onClick={() => handleClick("profile")}
        >
          <CgProfile />
          Perfil
        </MenuItem>
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
