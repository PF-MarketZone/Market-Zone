/* eslint-disable react/prop-types */
import { useState } from "react";
import { backendUrl } from "../../deployConfig";
import axios from "axios";

const colors = {
  orange: "gold",
  grey: "gray",
};

const CreateReview = ({ H1Title, ReviewsDiv, idProduct, idUser }) => {
  const [currentValue, setCurrentValue] = useState({
    product: idProduct,
    rating: 0,
    title: "",
    description: "",
  });
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue({ ...currentValue, rating: value });
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    setCurrentValue({ ...currentValue, [prop]: value });
  };

  const handleSubmit = async () => {
    if (
      currentValue.title.length === 0 ||
      currentValue.description.length === 0
    ) {
      alert("El título y la descripción no pueden quedar vacíos");
    } else {
      try {
        const fetchData = await axios.post(
          `${backendUrl}/reviews/create?user=${idUser}`
        );
        const response = fetchData.data;
        alert(response.data.message);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div style={styles.div}>
      <ReviewsDiv>
        <h2>Escribe que tal te parecio el producto</h2>

        <H1Title>Califica tu compra</H1Title>
        <div style={styles.stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              style={{
                fontSize: "1.5rem",
                color:
                  (hoverValue || currentValue.rating) > index
                    ? colors.orange
                    : colors.grey,
                cursor: "pointer",
              }}
            >
              &#9733;
            </span>
          ))}
        </div>

        <H1Title>
          <label htmlFor="title">Título:</label>
        </H1Title>

        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Título de la reseña"
          style={styles.input}
          onChange={handleChange}
        />

        <H1Title>
          <label htmlFor="description">Comentario:</label>
        </H1Title>
        <textarea
          placeholder="Escribir comentario"
          id="description"
          name="description"
          style={styles.textarea}
          onChange={handleChange}
        />
        <button style={styles.button} onClick={handleSubmit}>
          Enviar reseña
        </button>
      </ReviewsDiv>
    </div>
  );
};

const styles = {
  input: {
    border: "1px solid #a7a7a7",
    borderRadius: 5,
    padding: 10,
    margin: "0",
    minHeight: "1rem",
    width: "100%",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textarea: {
    border: "1px solid #a7a7a7",
    borderRadius: 5,
    padding: 10,
    margin: "0",
    minHeight: 100,
    width: "100%",
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  div: {
    border: "1px solid #F6F6F6",
    borderRadius: "15px",
    backgroundColor: "#F6F6F6",
  },
};

export default CreateReview;
