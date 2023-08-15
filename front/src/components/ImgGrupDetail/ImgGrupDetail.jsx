import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import tiendas from './../../Data/dummyData';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../redux/actions'


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

    const dispatch = useDispatch();
    const { detailId } = useParams();

    useEffect(() => {
        dispatch(getProductById(detailId))
    }, [dispatch, detailId]);

    const details = useSelector(state => state.detail);

    if (!details.images || details.images.length < 3) {
        return <p>No hay suficientes imágenes disponibles.</p>;
    }
    
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
    );    
};

export default ImgGrupD;
