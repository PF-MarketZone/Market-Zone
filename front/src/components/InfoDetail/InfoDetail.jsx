import React, { useEffect, useState } from "react";
//import tiendas from './../../Data/dummyData';
import { faCheck, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Actions/productsAction";
import { agregarAlCarrito,actualizarInfoD } from "../../redux/actions";
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

const InfoD = () => {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const details = useSelector((state) => state.products.detail);
  const infoDUpdated = useSelector((state) => state.filters.infoDUpdated);

  // Obtener el stock temporal para este producto desde el localStorage
  const temporaryStockInStorage =
    JSON.parse(localStorage.getItem(`temporaryStock_${detailId}`)) || 0;

  const [quantity, setQuantity] = useState(0);
  const [temporaryStock, setTemporaryStock] = useState(temporaryStockInStorage);

  useEffect(() => {
    if (infoDUpdated) {
      dispatch(getProductById(detailId));

      // Restablece infoDUpdated a false para evitar un bucle infinito
      dispatch(actualizarInfoD());
    }
  }, [dispatch, detailId, infoDUpdated]);

  useEffect(() => {
    dispatch(getProductById(detailId));
  }, [dispatch, detailId]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleContinueShopping = () => {
    window.location.href = `/${details.storeId}`;
  };

  const handleIncrease = () => {
    const totalStock = details.stock - temporaryStock;
    if (quantity < totalStock) {
      setQuantity(quantity + 1);
    } else {
      toast.error("No hay suficiente stock disponible.");
    }
  };

  const agregarAlCarritoClick = () => {
    const totalStock = details.stock - temporaryStock;

    if (quantity > 0 && quantity <= totalStock) {
      const newItem = {
        _id: details._id,
        name: details.name,
        price: details.price,
        image: details.image,
        quantity: quantity,
        stock: details.stock,
      };

      // Actualizar stock temporal en LocalStorage para este producto
      const updatedTemporaryStock = temporaryStock + quantity;
      localStorage.setItem(
        `temporaryStock_${detailId}`,
        JSON.stringify(updatedTemporaryStock)
      );

      setTemporaryStock(updatedTemporaryStock); // Actualizar el estado local también

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(agregarAlCarrito(newItem));

      toast.success(
        `Se agregaron ${quantity} ${
          quantity === 1 ? "unidad" : "unidades"
        } de ${details.name} al carrito.`
      );
    } else if (quantity > totalStock) {
      toast.error("No hay suficiente stock disponible.");
    }
  };

  return (
    <>
      <ToastContainer />
      <DivPrincipal>
        <H3Categories>
          {details.categories && details.categories.category
            ? details.categories.category
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
            Agregar al Carrito
          </ButtonAddToCart>
          <ButtonFavorito  onClick={handleContinueShopping}>
          Seguir Comprando
          </ButtonFavorito>
        </div>
      </DivPrincipal>
    </>
  );
};
export default InfoD;
