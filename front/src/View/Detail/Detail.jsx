import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import MainButton from '../../components/Buttons/MainButton'
import ImgGrupD from '../../components/ImgGrupDetail/ImgGrupDetail.jsx';
import Nav from '../../components/Nav/Nav'
import InfoD from '../../components/InfoDetail/InfoDetail'
import Reviews from '../../components/Reviews/reviews';

import OverallRating from '../../components/OverallRating/OverallRating'

const CardDetail = styled.div`
    display: flex;
    justify-content: center;
    margin: 3vw;
`
const DivdReviewsRating = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3vw;
`
const Div = styled.div`
font-family: 'Montserrat', sans-serif;
`

const Detail = (props) => {
    /* const dispatch = useDispatch();
    const { detailId } = useParams();

    useEffect(() => {
        dispatch(getRecipeById(detailId))
    }, [dispatch, detailId]);

    const navigate = useNavigate();

    const details = useSelector(state => state.details)

    const cleanHTML = (html) => {
        return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
      }; */
    return (
        <Div>
            <div>
                {/* <Nav /> */}
                <CardDetail>
                    <ImgGrupD />
                    <InfoD />
                </CardDetail>
                <DivdReviewsRating>
                    <Reviews/>
                    {<OverallRating/>}
                </DivdReviewsRating>

            </div>
            <MainButton text="Regresar al Home" route="/" />
        </Div>

    )
};

export default Detail;