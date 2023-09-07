import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LetteredAvatar from "react-lettered-avatar";
import { styled } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { putInfoProfile } from "../../../redux/Actions/userAction";
import { mapUserDataToAPI } from './mapUserDataToAPI';
import { BiEditAlt } from 'react-icons/bi';

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivDirection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DivName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;
const DivRoll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Avatar = styled.div`
  margin: 2rem;
  margin-left: 0;
`;
const H6 = styled.h6`
  margin: 0;
`;
const H3 = styled.h3`
  margin: 0;
`;
const DivEdit = styled.div`
  display: flex;
`;
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  last_name: Yup.string().required("Apellido es requerido"),
  age: Yup.number().positive("Edad debe ser un número positivo"),
  // Define las validaciones para otros campos del usuario que desees editar aquí
});

const Profile = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAge, setIsEditingAge] = useState(false);
  const [isEditingShippingAddress, setIsEditingShippingAddress] = useState(
    Array(user.user.shippingAddress.length).fill(false)
  );

  // Define un objeto de roles y sus respectivos mensajes
  const roleMessages = {
    admin: "Administrador",
    customer: "Comprador",
    seller: "Vendedor",
  };

  // Obtén el mensaje de rol basado en el ID del rol del usuario
  const roleMessage = roleMessages[user.user.role[0]] || "Rol desconocido";

  const firstName = user.user.name[0] || "";
  const lastName = user.user.last_name[0] || "";
  const fullName = `${firstName} ${lastName}`.trim();

  const formik = useFormik({
    initialValues: {
      name: user.user.name || "",
      last_name: user.user.last_name || "",
      age: user.user.age || "",
      email: user.user.email || "",
      phoneNumber: user.user.phoneNumber || "",
      address: {
        street: user.user.address ? user.user.address.street : "",
        streetNumber: user.user.address ? user.user.address.streetNumber : "",
        postalCode: user.user.address ? user.user.address.postalCode : "",
        townNeighborhood: user.user.address
          ? user.user.address.townNeighborhood
          : "",
        floorApartment: user.user.address
          ? user.user.address.floorApartment
          : "",
        city: user.user.address ? user.user.address.city : "",
      },
      shippingAddress: user.user.shippingAddress.map((address) => ({
        ...address,
      })),
      // Agrega otros campos del usuario que desees editar aquí
    },
    validationSchema: validationSchema, // Define tu esquema de validación
    onSubmit: async (formData, { resetForm }) => {
      try {
        const transformedData = mapUserDataToAPI(user.user._id, formik.values);
        console.log(transformedData);
        // Realiza una acción para editar el usuario, por ejemplo, dispatch a Redux
        await dispatch(
          putInfoProfile(transformedData, user.token, user.refreshToke)
        );
        alert("Usuario editado con éxito");
        setIsEditingName(false);
        setIsEditingAge(false);
        setIsEditingShippingAddress(false);
      } catch (error) {
        console.error("Error al editar el usuario:", error);
        alert("No se pudo editar el usuario");
      }
    },
  });

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleCancelEditName = () => {
    setIsEditingName(false);
  };

  const handleEditAge = () => {
    setIsEditingAge(true);
  };

  const handleCancelEditAge = () => {
    setIsEditingAge(false);
  };

  return (
    <DivPrincipal>
      <Div>
        <Avatar>
          <LetteredAvatar name={fullName || "Usuario"} size={96} font />
        </Avatar>
        <DivRoll>
          <H6>Rol:</H6>
          <H3>{roleMessage}</H3>
          <button>?</button>
        </DivRoll>
        <DivName>
          <H6>Nombre:</H6>
          {isEditingName ? (
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <input
                type="text"
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCancelEditName}>
                Cancelar
              </button>
            </form>
          ) : (
            <>
              <H3>
                {formik.values.name} {user.user.last_name}
              </H3>
              <button onClick={handleEditName}>Editar</button>
            </>
          )}
        </DivName>
        <div>
          <H6>edad:</H6>
          {isEditingAge ? (
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCancelEditAge}>
                Cancelar
              </button>
            </form>
          ) : (
            <>
              <H3>{user.user.age}</H3>
              <button onClick={handleEditAge}>Editar</button>
            </>
          )}
        </div>
        <div>
          {formik.values.shippingAddress.map((address, index) => (
            <DivDirection key={index}>
              {isEditingShippingAddress[index] ? (
                <form onSubmit={formik.handleSubmit}>
                  {/* Campos de dirección de envío */}
                  <input
                    type="text"
                    name={`shippingAddress[${index}].street`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shippingAddress[index].street}
                  />
                  <input
                    type="text"
                    name={`shippingAddress[${index}].streetNumber`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shippingAddress[index].streetNumber}
                  />
                  <input
                    type="text"
                    name={`shippingAddress[${index}].postalCode`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shippingAddress[index].postalCode}
                  />
                  <input
                    type="text"
                    name={`shippingAddress[${index}].townNeighborhood`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={
                      formik.values.shippingAddress[index].townNeighborhood
                    }
                  />
                  <input
                    type="text"
                    name={`shippingAddress[${index}].floorApartment`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shippingAddress[index].floorApartment}
                  />
                  <input
                    type="text"
                    name={`shippingAddress[${index}].city`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shippingAddress[index].city}
                  />
                  {/* Otros campos de dirección de envío */}
                  <button type="submit">Guardar Dirección</button>
                  <button
                    type="button"
                    onClick={() => {
                      // Cancelar la edición
                      setIsEditingShippingAddress((prevState) =>
                        prevState.map((editing, i) =>
                          i === index ? false : editing
                        )
                      );
                    }}
                  >
                    Cancelar
                  </button>
                </form>
              ) : (
                <DivEdit>
                  <H3>
                    {address.street} {address.streetNumber} CP.{" "}
                    {address.postalCode} {address.townNeighborhood}{" "}
                    {address.city} {address.floorApartment}{" "}
                    {address.additionalInformation}
                  </H3>
                  <button
                    style={{ backgroundColor: "transparent", padding:"0 3vw", border: "none"}}
                    onClick={() => {
                      // Iniciar la edición
                      setIsEditingShippingAddress((prevState) =>
                        prevState.map((editing, i) =>
                          i === index ? true : editing
                        )
                      );
                    }}
                  >
                  <BiEditAlt style={{ width: "1.5vw", height: "1.5vw"}} />
                  </button>
                </DivEdit>
              )}
            </DivDirection>
          ))}
        </div>
      </Div>
    </DivPrincipal>
  );
};

export default Profile;
