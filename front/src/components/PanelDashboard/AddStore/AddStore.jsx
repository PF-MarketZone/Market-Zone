import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "../../../redux/Actions/productsAction";
import ImageUpload from "../../ImageUpload/ImageUpload";

import {
  ErrorMessage,
  FormGroup,
  InputField,
  ProductFormContainer,
  TittleForm,
} from "../AddProducts/StyleComponenteAdd";
import validationSchema from "./validationSchema";

const AddStore = () => {
  const dispatch = useDispatch();
  const { user, token, refreshToken } = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: [],
      user: user._id,
    },
    validationSchema: validationSchema,
    onSubmit: async (formData, { resetForm }) => {
      try {
        console.log(formik);
        console.log(formData);
        await dispatch(createStore(formData, token, refreshToken));
        alert("Tienda creada con éxito");
        resetForm();
      } catch (error) {
        console.error("Error al crear la tienda:", error);
        alert("No se pudo crear la tienda");
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
