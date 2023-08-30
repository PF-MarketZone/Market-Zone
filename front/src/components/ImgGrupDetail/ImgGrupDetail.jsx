import React, { useState, useEffect } from 'react';
//import tiendas from './../../Data/dummyData';
import Logo from '../../images/LogoFNegro.png'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../redux/Actions/productsAction';
import { OneImage, TwoImage, Img1G, Img2G, Div, ImgLogo } from './ImgStyledComponent'
const ImgGrupD = (props) => {

    const dispatch = useDispatch();
    const { detailId } = useParams();

    useEffect(() => {
        dispatch(getProductById(detailId))
    }, [dispatch, detailId]);

    const details = useSelector(state => state.product.detail);


    if (!details.images) {
        return(

        <Div key="no images">
            <ImgLogo src={Logo} alt="logo no disponible" />
        </Div>)
    }

    return (
        <Div>
            {details.images.length >= 3 && (
                <Div key={details.id}>
                    <Img1G src={details.images[0]} alt="Imagen 1" />
                    <div>
                        <Img2G src={details.images[1]} alt="Imagen 2" />
                        <Img2G src={details.images[2]} alt="Imagen 3" />
                    </div>
                </Div>
            )}
            {details.images.length === 2 && (
                <Div key={details.id}>
                    <TwoImage src={details.images[0]} alt="Imagen 1" />
                    <TwoImage src={details.images[1]} alt="Imagen 2" />
                </Div>
            )}
            {details.images.length === 1 && (
                <Div key={details.id}>
                    <OneImage src={details.images[0]} alt="Imagen 1" />
                </Div>
            )}
        </Div>
    );
};

export default ImgGrupD;
