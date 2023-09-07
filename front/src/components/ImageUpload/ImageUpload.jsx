import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImageUpload = ({ images, onImageChange }) => {
  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onImageChange(newImages);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          const selectedImages = Array.from(event.currentTarget.files);
          onImageChange([...images, ...selectedImages]);
        }}
        multiple
      />
      <div>
                {images.map((image, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              {image instanceof File ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Vista previa de la imagen ${index}`}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "5px",
                  }}
                />
              ) : (
                <img
                  src={image} // Si ya es una URL válida, no necesitas crear una URL
                  alt={`Vista previa de la imagen ${index}`}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "5px",
                  }}
                />
              )}
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleImageRemove(index)}
              >
                <AiOutlineCloseCircle />
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default ImageUpload;