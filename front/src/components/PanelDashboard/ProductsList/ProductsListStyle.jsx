import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ccc;
`;

export const FileProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  border-bottom: 2px solid #ccc; 
`;

export const ColumnProduct = styled.div`
  flex: 1; 
  padding: 10px;
`;

export const ImgProduct = styled.img`
  width: 100px; 
  height: 100px; 
`;

export const ToggleButton = styled.button`
  background-color: ${props => props.isActive ? 'red' : 'green'};
  color: white;
  
  &:hover {
    filter: brightness(1.2);
  }
`;
