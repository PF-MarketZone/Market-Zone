import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column; /* Muestra las filas de arriba a abajo */
  border: 1px solid #ccc; /* Línea que separa las filas */
  padding: 10px;
`;

export const FileProduct = styled.div`
  display: flex;
  justify-content: space-between; /* Distribuye las columnas uniformemente */
  border-bottom: 1px solid #ccc; /* Línea que separa las columnas */
  padding: 5px 0; /* Espaciado vertical entre filas */
`;

export const ColumnProduct = styled.div`
  flex: 1; /* Expande las columnas para ocupar el espacio disponible */
  padding: 5px;
`;

export const ImgProduct = styled.img`
  width: 100px; /* Ancho deseado */
  height: auto; /* Altura automática para mantener la proporción */
`;