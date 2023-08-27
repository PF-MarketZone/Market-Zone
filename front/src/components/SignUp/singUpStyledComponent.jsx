import styled from 'styled-components';

export const StyledForm = styled.form`

    `;

export const Input = styled(({ value, error, ...rest }) => <input {...rest} />)`
    color: ${props => props.value === '' ? '#777676' : '#1d1e18'};
    background-color: ${props => props.error ? '#f17f7f79' : '#fbfbf2'};
    border: solid 1px #4e4e4e;
    border-radius: 5px;
    width: 100%;
    padding: 1px 0px;
    padding-left: 4px;
    margin: 6px 0px;
    height: 5vh;
    

    + p {
        display: ${props => props.error ? 'block' : 'none'};
        color: red;
        position: absolute;
        bottom: -23vh;
        width: 30%;
    }
`;

export const SelectContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const CustomSelect = styled(({ error, value, ...rest }) => <select {...rest} />)`
    /* Estilos generales */
    width: 100%;
    min-height: 2.5em;
    padding: 1px 0px;
    border: 1px solid #4e4e4e;
    border-radius: 5px;
    background-color: #fbfbf2;
    margin: 6px 0px;
    
    
    /* Estilo cuando una opción está seleccionada */
    color: ${props => props.value === '' ? '#777676' : '#1d1e18'};
    font-weight: ${props => props.value === '' ? '300' : 'normal'};

    + p {
        display: ${props => props.error ? 'block' : 'none'};
        color: red;
        position: absolute;
        bottom: -23vh; /* Ajusta esto según sea necesario */
        left: 0;
        width: 100%;
    }
    background-color: ${props => props.error ? '#f17f7f79' : '#fbfbf2'};
`;

export const H3 = styled.h3`
    margin: 1px 0 25px 0;
    font-size: 20px;
    font-weight: 500;
    color: #fbfbf2;
    `
export const H3O = styled.h3`
        margin: 15px 0;
        color: #fbfbf2;
    `
export const H5 = styled.h5`
    margin: 6px 0 0 0;
    font-size: 16px;
    font-weight: 300;
    color: #fbfbf2;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const DivName = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DivPrincipal = styled.div`
background-color: #1D1E18;
   width: 30%;
   border: 1px solid #8B3DFF;
   border-radius: 20px;
   padding:5vh;
   height: 30%;
`
