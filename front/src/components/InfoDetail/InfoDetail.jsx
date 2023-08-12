import React, { useState } from 'react';
import styled from 'styled-components';
import tiendas from './../../Data/dummyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

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

`

const ButtonMenos = styled.button`
    width: 4vw;
    height: 4vw;
    border-radius: .5vw 0 0 .5vw;
    padding: 0;
    border: solid 0.1vw black;
    box-sizing: border-box;
`
const ButtonMas = styled.button`
    width: 4vw;
    height: 4vw;
    border-radius: 0 .5vw .5vw 0;
    padding: 0;
    border: solid 0.1vw black;
    box-sizing: border-box;
`

const H3Categories = styled.h3`
    font-size: 1.2vw;
    margin: 1.0vw;
    font-weight: 700;
`

const H1Name = styled.h1`
    font-size: 2vw;
    margin: 1.0vw;
    font-weight: 700;
`

const PDescripction = styled.p`
    font-size: 1.4vw;
    margin: 1.0vw;
`

const DivPriceStock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1vw;
    font-size: 1.2vw;
    margin: 1.0vw;
`

const H2Price = styled.h2`
    font-size: 1.5vw;
    color: #ce6cce;
    font-weight: 600;
`
const H2Stock = styled.h2`
    font-size: 1.5vw;
    font-weight: 300;
`

const DivColor = styled.div`
    font-size: 1.2vw;
    margin: 1.0vw;
`

const DIvPuntoColor = styled.div`
background-color: ${props => getColorFromName(props.color)};
width: 2vw;
height: 2vw;
border-radius: 99999vw;
`

// Función para traducir nombres de colores en valores de CSS
const getColorFromName = (colorName) => {
    const colorMap = {
        rojo: 'red', // Aquí agrega más traducciones de colores si es necesario
        // ...otros colores
    };

    return colorMap[colorName] || 'transparent'; // Si el color no se encuentra en el mapa, se usa transparente
};

const DivCantidad = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4vw;
    font-size: 1.2vw;
    margin: 1vw;
`
const DivPrincipal = styled.div`
margin: 1vw;
width: 50%;
font-family: 'Montserrat', sans-serif;
`

const ButtonAddToCart = styled.button`
width: 100%;
height: 5vw;
background-color: #ce6cce;
color: white;
border: solid .1vw white;
border-radius: 1vw;
cursor: pointer;
  transition: background-color 0.3s ease;

&:hover {
    background-color: black;
    color: #f6f8ff;
  }
`
const ButtonFavorito = styled.button`
width: 100%;
height: 5vw;
background-color: transparent;
color: black;
border: solid .1vw white;
border-radius: 1vw;
cursor: pointer;
  transition: background-color 0.3s ease;


&:hover {
    background-color: red;
    color: #f6f8ff;
  }
`
const LineaDelgada = styled.hr`
    margin: 1vw 0; // Ajusta el margen superior e inferior según tus necesidades
    border: .1vw solid #c2c1c1cf; // Grosor y color de la línea
`

const InfoD = (props) => {

    const details = tiendas[0].products[0];

    const [quantity, setQuantity] = useState(0);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            <DivPrincipal>
                <H3Categories>{details.categories && details.categories.length > 0 ? details.categories.join(', ') : 'N/A'}</H3Categories>
                <H1Name>{details.name}</H1Name>

                <DivPriceStock>
                    <H2Price>${details.price}</H2Price>
                    <H2Stock>
                        {details.stock > 0 ? <FontAwesomeIcon icon={faCheck} style={{ color: 'green' , strokeWidth: 1 }} /> : <FontAwesomeIcon icon={faTimes} style={{ color: 'red' , strokeWidth: 1 }} />}
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
                        <InputNum type="number" value={quantity} min="0" max="100" step="1" onChange={(e) => setQuantity(parseInt(e.target.value))} />
                        <ButtonMas onClick={handleIncrease}>+</ButtonMas>
                    </DivCantidad>
                </DivCantidad>
                <LineaDelgada />
                <div>
                    <ButtonAddToCart>Agregar al Carrrito</ButtonAddToCart>
                    <ButtonFavorito>{<FontAwesomeIcon icon={faHeart} style={{ color: 'white'}} />}Agregar a Favorito</ButtonFavorito>
                </div>
            </DivPrincipal>
        </>
    );
}
export default InfoD;