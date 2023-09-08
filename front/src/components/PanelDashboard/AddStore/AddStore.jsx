import React from "react";
import { useDispatch } from "react-redux";
import { createStore } from "../../../redux/Actions/productsAction";
import { useFormik } from "formik";
import ImageUpload from "../../ImageUpload/ImageUpload";
import { sessionActive } from "../../../redux/Actions/authAction";
import validationSchema from "./validationSchema";
import {
  TittleForm,
  ProductFormContainer,
  FormGroup,
  InputField,
  ErrorMessage,
} from "../AddProducts/StyleComponenteAdd";

const AddStore = () => {
  const dispatch = useDispatch();
  const { user, auth } = dispatch(sessionActive());

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: [],
      user: user.user._id,
    },
    validationSchema: validationSchema,
    onSubmit: async (formData, { resetForm }) => {
      try {
        await dispatch(createStore(formData, user.token, user.refreshToken));
        alert("Producto creado con éxito");
        resetForm();
      } catch (error) {
        console.error("Error al crear el producto:", error);
        alert("No se pudo crear el producto");
      }
    },
  });
  return (
    <ProductFormContainer>
      <TittleForm>Crea tienda</TittleForm>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <InputField
            type="text"
            name="name"
            placeholder="Nombre de la tienda"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : null}
        </FormGroup>

        <FormGroup>
          <InputField
            type="text"
            name="description"
            placeholder="Descripcion de la tienda"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage>{formik.errors.description}</ErrorMessage>
          ) : null}
        </FormGroup>

        <FormGroup>
          <ImageUpload
            images={formik.values.image}
            onImageChange={(newImages) => {
              formik.setFieldValue("image", newImages);
            }}
          />
          {formik.touched.image && formik.errors.image && (
            <ErrorMessage>{formik.errors.image}</ErrorMessage>
          )}
        </FormGroup>

        <button type="submit">Agregar Tienda</button>
      </form>
    </ProductFormContainer>
  );
};

export default AddStore;