import React, { useEffect, useState } from "react";
//import tiendas from './../../Data/dummyData';
import { faCheck, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Actions/productsAction";
import { agregarAlCarrito } from "../../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonAddToCart,
  ButtonFavorito,
  ButtonMas,
  ButtonMenos,
  DIvPuntoColor,
  DivCantidad,
  DivColor,
  DivPriceStock,
  DivPrincipal,
  H1Name,
  H2Price,
  H2Stock,
  H3Categories,
  InputNum,
  LineaDelgada,
} from "./InfoStyledComponent";

const InfoD = (props) => {
  const dispatch = useDispatch();
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getProductById(detailId));
  }, [dispatch, detailId]);

  const details = useSelector((state) => state.products.detail);

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
    if (quantity > 0 && quantity <= details.stock) {
      const newItem = {
        _id: details._id,
        name: details.name,
        price: details.price,
        image: details.image,
        quantity: quantity,
      };
      dispatch(agregarAlCarrito(newItem));
      toast.success(
        `Se agregaron ${quantity} ${
          quantity === 1 ? "unidad" : "unidades"
        } de ${details.name} al carrito.`
      );
    } else if (quantity > details.stock) {
      toast.error("No hay suficiente stock disponible.");
    }
  };

  return (
    <>
      <ToastContainer />
      <DivPrincipal>
        <H3Categories>
          {details.categories && details.categories.length > 0
            ? details.categories.join(", ")
            : "N/A"}
        </H3Categories>
        <H1Name>{details.name}</H1Name>

        <DivPriceStock>
          <H2Price>${parseInt(details.price)}</H2Price>
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
