import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//import BackButton from '../../components/BackButton/BackButton'
import ImgGrupD from "../../components/ImgGrupDetail/ImgGrupDetail.jsx";
import InfoD from "../../components/InfoDetail/InfoDetail";
import Reviews from "../../components/Reviews/reviews";
import OverallRating from "../../components/OverallRating/OverallRating";
import axios from "axios";
import { backendUrl } from "../../deployConfig.js";

const CardDetail = styled.div`
  display: flex;
  justify-content: center;
  margin: 3vw;
  margin-top: 0;
`;
const DivdReviewsRating = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3vw;
  margin-bottom: 0;
`;
const Div = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: white;
`;

const Detail = (props) => {
  const { detailId } = useParams();
  const [reviewsData, setReviewsData] = useState(false);

  useEffect(() => {
    try {
      axios(`${backendUrl}/reviews?productId=${detailId}`).then((response) =>
        setReviewsData(response.data)
      );
    } catch (error) {
      setReviewsData(false);
    }
  }, []);

  return (
    <Div>
      <div>
        <CardDetail>
          <ImgGrupD />
          <InfoD />
        </CardDetail>
        <DivdReviewsRating>
          <Reviews reviews={reviewsData} idProduct={detailId} />
          <OverallRating reviews={reviewsData} />
        </DivdReviewsRating>
        {/*  <BackButton /> */}
      </div>
    </Div>
  );
};

export default Detail;
