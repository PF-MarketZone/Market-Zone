import React from "react";
import { H2Title, DivPricipal } from "./ORStyledComponet";

const OverallRating = ({ reviews }) => {
  const ratings = Array.isArray(reviews)
    ? reviews?.map((review) => review.rating)
    : [0];
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  return (
    <DivPricipal>
      <div>
        <H2Title>
          <h2>Evaluación general</h2>
        </H2Title>
        <span
          style={{
            fontSize: "1.5rem",
            color: averageRating >= 1 ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
        <span>({averageRating.toFixed(1)})</span>
      </div>
    </DivPricipal>
  );
};

export default OverallRating;
