import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionActive } from "../../../redux/Actions/authAction";
import customerFnReview from "./customerFnReview";
import styles from "./Reviews.module.css";

import {
  TittleForm,
  ProductFormContainer,
  FormGroup,
  InputField,
  ErrorMessage,
} from "../AddProducts/StyleComponenteAdd";

const Reviews = () => {
  //const dispatch = useDispatch();
  const { user, token, refreshToken } = useSelector((state) => state.auth.user);
  console.log(token)

  const [reviews, setReviews] = React.useState(false);

  const getAllReviews = async () => {
  
      try {
        const reviews = await customerFnReview(
          user._id,
          token,
          refreshToken
        );

        setReviews(reviews);
      } catch (error) {
        console.log("error de algo", error);
      }
    
  };

  React.useEffect(() => {
    getAllReviews();
  }, []);
  console.log(reviews);

  return (
    <ProductFormContainer>
      <TittleForm>Reseñas de productos</TittleForm>
      {/* {!reviews ? (
        <section className={styles["container-loader"]}>
          <div className={styles["loader"]}></div>
        </section>
      ) : */}
     { !reviews ? ( 
        <h2>No tienes reseñas creadas</h2>
      ) : (
        <section className={styles["users-table"]}>
          <table className={styles["user-table"]}>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre del producto</th>
                <th>Reseña</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review["_id"]}>
                  <td>{<img src={review.imageP} alt="imagen"></img>}</td>
                  <td>{review.nameP}</td>
                  <td>{review.title}</td>
                  <td>{review.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </ProductFormContainer>
  );
};

export default Reviews;
