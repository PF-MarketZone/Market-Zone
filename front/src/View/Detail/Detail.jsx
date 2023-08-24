import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
//import BackButton from '../../components/BackButton/BackButton'
import ImgGrupD from '../../components/ImgGrupDetail/ImgGrupDetail.jsx';
import Nav from '../../components/Nav/Nav'
import InfoD from '../../components/InfoDetail/InfoDetail'
import Reviews from '../../components/Reviews/reviews';

import OverallRating from '../../components/OverallRating/OverallRating'

const CardDetail = styled.div`
    display: flex;
    justify-content: center;
    margin: 3vw;
    margin-top: 0;
`
const DivdReviewsRating = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3vw;
    margin-bottom: 0;
`
const Div = styled.div`
font-family: 'Montserrat', sans-serif;
background-color: white;
`

const Detail = (props) => {
    const { detailId } = useParams();
    /* const dispatch = useDispatch();

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
                <CardDetail>
                    <ImgGrupD />
                    <InfoD />
                </CardDetail>
                <DivdReviewsRating>
                    <Reviews />
                    {<OverallRating />}
                </DivdReviewsRating>
               {/*  <BackButton /> */}
            </div>
        </Div>

    )
};

export default Detail;