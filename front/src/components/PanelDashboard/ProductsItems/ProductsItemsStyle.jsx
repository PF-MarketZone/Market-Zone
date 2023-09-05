import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
`;

export const FileProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinea verticalmente los elementos en el centro */
  border-bottom: 1px solid #ccc; 
`;

export const ColumnProduct = styled.div`
  flex: 1; /* Expande las columnas para ocupar el espacio disponible */
  padding: 10px;
`;

export const ImgProduct = styled.img`
  width: 100px; /* Ancho deseado */
  height: auto; /* Aler tura automática para mantenla proporción */
`;

