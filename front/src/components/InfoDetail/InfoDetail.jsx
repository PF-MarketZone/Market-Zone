import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import tiendas from './../../Data/dummyData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, agregarAlCarrito } from "../../redux/actions";
const InputNum = styled.input`
  //-webkit-appearance: none;
  margin: 0;
  width: 4vw;
  height: 4vw;
  border-radius: 0;
  text-align: center;
  border: solid 0.1vw black;
  box-sizing: border-box;
  font-size: 1.5vw;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    appearance: none;
  }
`;


// Función para traducir nombres de colores en valores de CSS
const getColorFromName = (colorName) => {
  const colorMap = {
    rojo: "red", // Aquí agrega más traducciones de colores si es necesario
    // ...otros colores
  };

  return colorMap[colorName] || "transparent"; // Si el color no se encuentra en el mapa, se usa transparente
};

const InfoD = (props) => {
  const dispatch = useDispatch();
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getProductById(detailId));
  }, [dispatch, detailId]);

  const details = useSelector((state) => state.filters.detail);

  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const agregarAlCarritoClick = () => {
    if (quantity > 0) {
      const newItem = {
        id: details.id,
        name: details.name,
        price: details.price,
        quantity: quantity,
      };
      dispatch(agregarAlCarrito(newItem));
    }
  };

  return (
    <>
      <DivPrincipal>
        <H3Categories>
          {details.categories && details.categories.length > 0
            ? details.categories.join(", ")
            : "N/A"}
        </H3Categories>
        <H1Name>{details.name}</H1Name>

        <DivPriceStock>
          <H2Price>${details.price}</H2Price>
          <H2Stock>
            {details.stock > 0 ? (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green", strokeWidth: 1 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "red", strokeWidth: 1 }}
              />
            )}
            &nbsp; en stock
          </H2Stock>
        </DivPriceStock>
        <LineaDelgada />
        <DivColor>
          <h2>color</h2>
          <DIvPuntoColor color={details.color} />
        </DivColor>
        <LineaDelgada />
        <DivCantidad>
          <h2>Cantidad</h2>
          <DivCantidad>
            <ButtonMenos onClick={handleDecrease}>-</ButtonMenos>
            <InputNum
              type="number"
              value={quantity}
              min="0"
              max="100"
              step="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <ButtonMas onClick={handleIncrease}>+</ButtonMas>
          </DivCantidad>
        </DivCantidad>
        <LineaDelgada />
        <div>
          <ButtonAddToCart onClick={agregarAlCarritoClick}>
            Agregar al Carrrito
          </ButtonAddToCart>
          <ButtonFavorito>
            {<FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />}
            Agregar a Favorito
          </ButtonFavorito>
        </div>
      </DivPrincipal>
    </>
  );
};
export default InfoD;
