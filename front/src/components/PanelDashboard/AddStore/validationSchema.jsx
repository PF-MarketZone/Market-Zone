import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Coloca un nombre a la tienda"),
  description: Yup.string()
    .required("Coloca una descripción")
    .max(80, "La descripción debe tener máximo 80 caractéres"),
  image: Yup.array()
    .max(1, "Solamente puedes subir una imagen")
    .required("Selecciona una imagen para la tienda"),
});

export default validationSchema;
