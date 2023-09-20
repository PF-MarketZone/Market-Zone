import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../Buttons/MainButton";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Redirige a la página anterior
  };

  return (
    <Link to="#" onClick={handleGoBack} style={{ textDecoration: "none" }}>
      <MyButton text="Volver" variant="inicio" type="button" />
    </Link>
  );
};

export default BackButton;
