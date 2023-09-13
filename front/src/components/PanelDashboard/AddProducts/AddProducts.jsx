/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../../redux/Actions/productsAction";
import styles from "./AddProduct.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageUpload from "../../ImageUpload/ImageUpload";
import { sessionActive } from "../../../redux/Actions/authAction";
import { backendUrl } from "../../../deployConfig";
import axios from "axios";


import {
  TittleForm,
  ProductFormContainer,
  FormGroup,
  InputField,
  ErrorMessage,
} from "./StyleComponenteAdd";

const validationSchema = Yup.object({
  storeId: Yup.string().required("Selecciona una tienda"),
  name: Yup.string().required("Coloca un nombre al producto"),
  description: Yup.string().required("Coloca una descripción"),
  image: Yup.array()
    .min(1, "Selecciona al menos una imagen")
    .required("Selecciona al menos una imagen"),
  color: Yup.string().required("Se requiere un color"),
  price: Yup.number()
    .required("Se requiere un precio")
    .test(
      "is-not-negative",
      "El precio no puede ser negativo",
      (value) => value !== "-"
    )
    .positive("El precio debe ser un número positivo"),
  stock: Yup.number()
    .required("Se requiere un número")
    .test(
      "is-not-negative",
      "El stock no puede ser negativo",
      (value) => value !== "-"
    )
    .positive("El stock debe ser un número positivo")
    .min(1, "El stock mínimo es uno"),
  category: Yup.string().required("Seleccione una categoría"),
  subcategory: Yup.string().required("Seleccione una subcategoria"),
});

const AddProducts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

  const [storesId, setStoresId] = React.useState(false);
 const [stores, setStores] = useState([]);
  const getMyStores = async () => {
    
      try {
        const response = await axios({
          url: `${backendUrl}/store`,
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "refresh-token": user.refreshToken,
          },
        });
       

        const allStore = response.data.data;
        const myStores = allStore.filter(
          (store) => store.user === user._id
        );
 console.log(myStores.map((e)=>e._id))
        if (!response.data.error) {
          setStoresId(myStores.map((e)=>e._id));
          setStores(myStores)
        }
      } catch (error) {
        console.log("error de algo", error);
      }
    
  };

  React.useEffect(() => {
    getMyStores();
    //return setStoresId(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      storeId: "",
      name: "",
      description: "",
      image: [],
      color: "",
      price: "",
      stock: "",
      category: "",
      subcategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (formData, { resetForm }) => {
      try {
        await dispatch(postProducts(formData));
        alert("Producto creado con éxito");
        formik.setFieldValue("image", []);
        resetForm();
      } catch (error) {
        console.error("Error al crear el producto:", error);
        alert("No se pudo crear el producto");
      }
    },
  });

  //
//console.log(stores)
  return (
    <ProductFormContainer>
      <TittleForm>Crea tu producto</TittleForm>
      {!storesId ? (
        <section className={styles["container-loader"]}>
          <div className={styles["loader"]}></div>
        </section>
      ) : storesId.length === 0 ? (
        <h2>No tienes tiendas creadas, primero debes crear una tienda</h2>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
          
      
      <select
              name="storeId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.storeId}
            >
              <option value="">--Seleciona una de tus tiendas--</option>
              {stores.map((storeName) => (
                <option key={storeName._id} value={storeName._id}>
                  {storeName.name}
                </option>
              ))}
            </select>
            {(formik.touched.storeId && formik.values.storeId === "") ||
            (formik.errors.storeId && formik.values.storeId === "") ? (
              <ErrorMessage>{formik.errors.storeId}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="text"
              name="name"
              placeholder="Nombre del Producto"
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
              placeholder="Descripcion del Producto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <ErrorMessage>{formik.errors.description}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="text"
              name="color"
              placeholder="Color"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.color}
            />
            {formik.touched.color && formik.errors.color ? (
              <ErrorMessage>{formik.errors.color}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="number"
              name="price"
              placeholder="Precio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <ErrorMessage>{formik.errors.price}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="number"
              name="stock"
              placeholder="Stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
            />
            {formik.touched.stock && formik.errors.stock ? (
              <ErrorMessage>{formik.errors.stock}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="text"
              name="category"
              placeholder="Categoria"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
              <ErrorMessage>{formik.errors.category}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <InputField
              type="text"
              name="subcategory"
              placeholder="Subcategoria"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subcategory}
            />
            {formik.touched.subcategory && formik.errors.subcategory ? (
              <ErrorMessage>{formik.errors.subcategory}</ErrorMessage>
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

          <button type="submit">Agregar Producto</button>
        </form>
      )}
    </ProductFormContainer>
  );
};

export default AddProducts;
