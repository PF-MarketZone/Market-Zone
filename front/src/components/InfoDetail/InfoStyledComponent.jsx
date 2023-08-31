import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputNum = styled.input`
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

export const ButtonMenos = styled.button`
    width: 4vw;
    height: 4vw;
    border-radius: 0.5vw 0 0 0.5vw;
    padding: 0;
    border: solid 0.1vw black;
    box-sizing: border-box;
`;
export const ButtonMas = styled.button`
    width: 4vw;
    height: 4vw;
    border-radius: 0 0.5vw 0.5vw 0;
    padding: 0;
    border: solid 0.1vw black;
    box-sizing: border-box;
`;

export const H3Categories = styled.h3`
    font-size: 1.2vw;
    margin: 1vw;
    font-weight: 700;
    color: black;
`;

export const H1Name = styled.h1`
    font-size: 2vw;
    margin: 1vw;
    font-weight: 700;
`;

export const PDescripction = styled.p`
    font-size: 1.4vw;
    margin: 1vw;
`;

export const DivPriceStock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1vw;
    font-size: 1.2vw;
    margin: 1vw;
`;

export const H2Price = styled.h2`
    font-size: 1.5vw;
    color: #8B3DFF;
    font-weight: 600;
`;
export const H2Stock = styled.h2`
    font-size: 1.5vw;
    font-weight: 300;
`;

export const DivColor = styled.div`
    font-size: 1.2vw;
    margin: 1vw;
`;

export const DIvPuntoColor = styled.div`
    background-color: ${(props) => getColorFromName(props.color)};
    width: 2vw;
    height: 2vw;
    border-radius: 99999vw;
`;

// Función para traducir nombres de colores en valores de CSS
const getColorFromName = (colorName) => {
    const colorMap = {
        rojo: "red",
        azul: "blue",
        verde: "green",// Aquí agrega más traducciones de colores si es necesario
        // ...otros colores
    };

    return colorMap[colorName] || "transparent"; // Si el color no se encuentra en el mapa, se usa transparente
};

export const DivCantidad = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4vw;
    font-size: 1.2vw;
    margin: 1vw;
`;
export const DivPrincipal = styled.div`
    margin: 1vw;
    width: 50%;
    font-family: "Montserrat", sans-serif;
    color: black;
`;

export const ButtonAddToCart = styled.button`
    width: 100%;
    height: 5vw;
    background-color: #8B3DFF;
    color: white;
    border: solid 0.1vw white;
    border-radius: 1vw;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: black;
        color: #f6f8ff;
    }
`;
export const ButtonFavorito = styled.button`
    width: 100%;
    height: 5vw;
    background-color: transparent;
    color: black;
    border: solid 0.1vw #8B3DFF;
    border-radius: 1vw;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: red;
        color: #f6f8ff;
    }
`;
export const LineaDelgada = styled.hr`
    margin: 1vw 0;
    border: 0.1vw solid #c2c1c1cf;
`;
