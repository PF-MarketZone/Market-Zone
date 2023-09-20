import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateProduct } from "../../../redux/Actions/productsAction";
import ImageUpload from "../../ImageUpload/ImageUpload";
import {
  ErrorMessage,
  FormGroup,
  InputField,
  ProductFormContainer,
  TittleForm,
} from "../AddProducts/StyleComponenteAdd";

const validationSchema = Yup.object({
  storeId: Yup.string().required("Selecciona una tienda"),
  name: Yup.string().required("El Campo no puede estar vacío"),
  description: Yup.string().required("El Campo no puede estar vacío"),
  // image: Yup.array().min(1, "Selecciona al menos una imagen").required("El Campo no puede estar vacío"),
  color: Yup.string().required("El Campo no puede estar vacío"),
  price: Yup.number()
    .required("El Campo no puede estar vacío")
    .test(
      "is-not-negative",
      "El precio no puede ser negativo",
      (value) => value >= 0
    ),
  stock: Yup.number()
    .required("El Campo no puede estar vacío")
    .test(
      "is-not-negative",
      "El stock no puede ser negativo",
      (value) => value >= 0
    ),
  category: Yup.string().required("El Campo no puede estar vacío"),
  subcategory: Yup.string().required("El Campo no puede estar vacío"),
});

const FormEditCard = ({ update, product, onCancelEdit }) => {
  const dispatch = useDispatch();
  const [editedImages, setEditedImages] = useState(
    product.image.map((image) => image.url)
  );

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState({
    _id: product._id,
    storeId: product.storeId || "",
    name: product.name || "",
    description: product.description || "",
    image: [],
    oldImages: [],
    color: product.color || "",
    price: product.price || "",
    stock: product.stock || "",
    category: product.categories.category || "",
    subcategory: product.categories.subcategory || "",
  });

  const storesId = {
    "Tienda Deportiva": "64daf18450c25495a4a6a611",
    "Tienda de Electrónica": "64daf18450c25495a4a6a612",
    "Tienda de Moda": "64daf18450c25495a4a6a613",
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: async (formData) => {
      const oldImages = editedImages.filter((img) => typeof img === "string");
      const newImages = editedImages.filter((img) => typeof img !== "string");
      const coincidentURLs = product.image.filter((image) =>
        oldImages.includes(image.url)
      );

      try {
        formData.image = newImages;
        formData.oldImages = coincidentURLs;

        setIsSubmitting(true);
        await dispatch(updateProduct(formData));
        setIsSubmitting(false);
        setUpdateSuccess(true);
        update();
        formik.setValues({
          ...formik.values,
          ...formData,
        });
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
        setIsSubmitting(false);
        setUpdateError(error.message);
      }
    },
  });

  const handleImageChange = (newImages) => {
    // Create a copy of formData and update the image field
    const updatedFormData = { ...formik.values };
    updatedFormData.image = newImages;
    formik.setValues(updatedFormData);
    setEditedImages(newImages);
  };

  return (
    <ProductFormContainer>
      <TittleForm>Edita tu producto</TittleForm>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <select
              name="storeId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.storeId}
            >
              <option value="">Tiendas</option>
              {Object.keys(storesId).map((storeName) => (
                <option key={storeName} value={storesId[storeName]}>
                  {storeName}
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
              placeholder="Descripción del Producto"
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
              placeholder="Categoría"
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
              placeholder="Sub-categoría"
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
              images={editedImages}
              onImageChange={handleImageChange}
            />
            {formik.touched.image && formik.errors.image && (
              <ErrorMessage>{formik.errors.image}</ErrorMessage>
            )}
          </FormGroup>

          {/* <FormGroup>
            <ImageUpload
              images={editedImages}
              onImageChange={(newImages) => {
                setEditedImages(newImages);
              }}
            />

          {formik.touched.image && formik.errors.image && (
            <ErrorMessage>{formik.errors.image}</ErrorMessage>
          )}
        </FormGroup> */}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Actualizando..." : "Actualizar Producto"}
          </button>
          <button onClick={onCancelEdit}>Cancelar Edición</button>
        </form>
      )}
    </ProductFormContainer>
  );
};

export default FormEditCard;
