/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CreateReview from "../createReview/createReview";

import {
  MainDiv,
  DivNameUser,
  H1Title,
  H1Description,
  ReviewsDiv,
} from "./RevStyledComponent";
import { sessionActive } from "../../redux/Actions/authAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../deployConfig";

const Reviews = ({ reviews, idProduct }) => {
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = dispatch(sessionActive());

  useEffect(() => {
    const reviewStatus = async () => {
      try {
        const response =
          isAuthenticated &&
          (await axios.get(`${backendUrl}/reviews/validation`, {
            params: {
              userId: user.user["_id"],
              productId: idProduct,
            },
          }));

        const responseData = response.data;

        setStatus(responseData);
      } catch (error) {
        console.error("Error al obtener el estado:", error);
      }
    };

    reviewStatus();
  }, []);

  return (
    <MainDiv>
      <h1>Reviews</h1>
      {reviews ? (
        reviews?.map(({ _id, rating, title, description }, index) => (
          <ReviewsDiv key={_id}>
            <DivNameUser>
              <h2>Comprador {index + 1}</h2>
              <div>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "1.5rem",
                      color: index < rating ? "gold" : "gray",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </DivNameUser>
            <H1Title>{title}</H1Title>
            <H1Description>{description}</H1Description>
          </ReviewsDiv>
        ))
      ) : (
        <ReviewsDiv>
          <DivNameUser>
            <h2>Este producto no contiene reseñas aún</h2>
          </DivNameUser>
          <H1Title>
            ¡Compra este producto y sé el primero en escribir una reseña!
          </H1Title>
          <H1Description></H1Description>
        </ReviewsDiv>
      )}

      {status && (
        <CreateReview
          idProduct={idProduct}
          H1Title={H1Title}
          ReviewsDiv={ReviewsDiv}
          idUser={user.user["_id"]}
        />
      )}
    </MainDiv>
  );
};
export default Reviews;
