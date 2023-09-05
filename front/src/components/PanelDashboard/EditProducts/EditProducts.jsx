// import React, {useEffect, useState} from 'react'
// import { getProductById, updateProduct } from '../../../redux/Actions/productsAction';
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from "yup";
// import ImageUpload from '../../ImageUpload/ImageUpload';
// import {AiOutlineEdit} from "react-icons/ai";
// import {
//     TittleForm,
//     ProductFormContainer,
//     FormGroup,
//     InputField,
//     ErrorMessage,
//   } from "../AddProducts/StyleComponenteAdd";
  

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Coloca un nombre al producto"),
//     description: Yup.string().required("Coloca una descripción"),
//     image: Yup.array().min(1, "Selecciona al menos una imagen").required("Selecciona al menos una imagen"),
//     color: Yup.string().required("Se requiere un color"),
//     price: Yup.number()
//       .required("Se requiere un precio")
//       .test("is-not-negative", "El precio no puede ser negativo", (value) => value >= 0),
//     stock: Yup.number()
//       .required("Se requiere un número")
//       .test("is-not-negative", "El stock no puede ser negativo", (value) => value >= 0),
//     category: Yup.string().required("Seleccione una categoría"),
//     subcategory: Yup.string().required("Seleccione una subcategoria"),
//   });

// const EditProducts = ({id, onEdit}) => {

//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.products);
//     const [editedImages, setEditedImages] = useState([]);
//     const [showConfirmation, setShowConfirmation] = useState(false);

    
//     const handleEditClick = () => {
//         setShowConfirmation(true)
//     }

//     const handleEditOk = async () => {
//         await onEdit(id);
//         setShowConfirmation(false)       
//     }

//     const handleEditCancel = () => {
//         setShowConfirmation(false);
//     }



//     const storesId = {
//         "Tienda Deportiva": "64daf18450c25495a4a6a611",
//         "Tienda de Electrónica": "64daf18450c25495a4a6a612",
//         "Tienda de Moda": "64daf18450c25495a4a6a613"
//       }
      

//     const formik = useFormik({
//         initialValues: {
//           name: "",
//           description: "",
//           image: [],
//           color: "",
//           price: "",
//           stock: "",
//           category: "",
//           subcategory: "",
//         },
//         validationSchema: validationSchema,
//         onSubmit: async (formData) => {
//           try {
//             const updatedImages = [...products.detail.image, ...editedImages];
//             await dispatch(updateProduct(id,{ ...formData, image: updatedImages }));
//             alert("Producto actualizado con éxito");
//           } catch (error) {
//             console.error("Error al actualizar el producto:", error);
//             alert("No se pudo actualizar el producto");
//           }
//         },
//       });

//     useEffect(() => {
//         dispatch(getProductById(id));
//     }, [id, dispatch]);

//     useEffect(()=> {
//         if(products.detail){
//             formik.setValues(products.detail)
//         }
//     }, [products.detail, formik])

    
//     return(
//         <div>
//             <AiOutlineEdit onClick={handleEditClick}></AiOutlineEdit>
//             {
//                 showConfirmation && (
//                     <div>
//                         <p>¿Desea modificar su producto?</p>
//                         <button onClick={handleEditOk}>Aceptar</button>
//                         <button onClick={handleEditCancel}>Cancelar</button>
//                     </div>
//                 )
//             }
//         <div>

//         </div>
//         <ProductFormContainer>
//         <TittleForm>Edita tu producto</TittleForm>
//         <form onSubmit={formik.handleSubmit}>
//           <FormGroup>
//           <select
//           name="storeId"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.storeId}
//           >
//             <option value="">Tiendas</option>
//             {Object.keys(storesId).map((storeName)=> (
//               <option key={storeName} value={storesId[storeName]}>
//                 {storeName}
//               </option>
//             ))}
//           </select>
//               {(formik.touched.storeId && formik.values.storeId === "") || (formik.errors.storeId && formik.values.storeId === "") ? (
//                 <ErrorMessage>{formik.errors.storeId}</ErrorMessage>
//               ) : null} 
//           </FormGroup>
//           <FormGroup>
//             <InputField 
//             type="text"
//             name="name"
//             placeholder="Nombre del Producto"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <ErrorMessage>{formik.errors.name}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="text"
//             name="description"
//             placeholder="Descripcion del Producto"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.description}
//             />
//             {formik.touched.description && formik.errors.description ? (
//               <ErrorMessage>{formik.errors.description}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="text"
//             name="color"
//             placeholder="Color"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.color}
//             />
//             {formik.touched.color && formik.errors.color ? (
//               <ErrorMessage>{formik.errors.color}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="number"
//             name="price"
//             placeholder="Precio"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.price}
//             />
//             {formik.touched.price && formik.errors.price ? (
//               <ErrorMessage>{formik.errors.price}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.stock}
//             />
//             {formik.touched.stock && formik.errors.stock ? (
//               <ErrorMessage>{formik.errors.stock}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="text"
//             name="category"
//             placeholder="Categoria"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.category}
//             />
//             {formik.touched.category && formik.errors.category ? (
//               <ErrorMessage>{formik.errors.category}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <InputField 
//             type="text"
//             name="subcategory"
//             placeholder="Subcategoria"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.subcategory}
//             />
//             {formik.touched.subcategory && formik.errors.subcategory ? (
//               <ErrorMessage>{formik.errors.subcategory}</ErrorMessage>
//             ) : null}
//           </FormGroup>
//           <FormGroup>
//           <ImageUpload
//             images={editedImages} // Usar las imágenes editadas
//             onImageChange={(newImages) => {
//               setEditedImages(newImages); // Actualizar el estado de las imágenes editadas
//             }}
//           />
//           {formik.touched.image && formik.errors.image && (
//             <ErrorMessage>{formik.errors.image}</ErrorMessage>
//           )}
//         </FormGroup>
  
//         <button type="submit">Actualizar Producto</button>
//         <button type="button" onClick={handleEditCancel}>Cancelar</button>
          
//         </form>
//       </ProductFormContainer>
//       </div>
//     )
// };

// export default EditProducts;