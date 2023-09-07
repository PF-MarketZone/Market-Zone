/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { postProducts } from "../../../redux/Actions/productsAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageUpload from "../../ImageUpload/ImageUpload";
import {
  TittleForm,
  ProductFormContainer,
  FormGroup,
  InputField,
  ErrorMessage,
} from "../AddProducts/StyleComponenteAdd";

const AddStore = () => {
  return (
    <ProductFormContainer>
      <TittleForm>Crea tienda</TittleForm>
    </ProductFormContainer>
  );
};

export default AddStore;
