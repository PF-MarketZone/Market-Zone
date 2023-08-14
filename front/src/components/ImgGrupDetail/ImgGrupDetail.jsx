import React from 'react';
import styled from 'styled-components';
import tiendas from './../../Data/dummyData'

const Img1G = styled.img`
    width: 30vw; 
  height: 30vw;
  object-fit: cover;
`
const Img2G = styled.img`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 15vw;
    object-fit: cover;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 50%;
    margin: 1vw;
`



const ImgGrupD = (props) => {

    const details = tiendas[0].products[0];
    
    return (
        <Div>
            <Div key={details.id}>
                <Img1G src={details.images[0]} alt="Imagen 1" />
                <div>
                    <Img2G src={details.images[1]} alt="Imagen 2" />
                    <Img2G src={details.images[2]} alt="Imagen 3" />
                </div>
            </Div>
        </Div>
    )
};

export default ImgGrupD;
