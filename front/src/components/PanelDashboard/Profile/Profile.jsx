import { useFormik } from "formik";
import React, { useState } from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import {
  TbBan,
  TbCheck,
  TbDeviceMobileCheck,
  TbDeviceMobileCog,
  TbDeviceMobilePlus,
  TbDeviceMobileX,
  TbPencilMinus,
  TbQuestionMark,
} from "react-icons/tb";
import LetteredAvatar from "react-lettered-avatar";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import * as Yup from "yup";
import { putInfoProfile } from "../../../redux/Actions/authAction";
import { mapUserDataToAPI } from "./mapUserDataToAPI";

const ButtonEdit = styled.button`
  background-color: transparent;
  padding: 0 3vw;
  border: none;
`;
const ButtonCheckBan = styled.button`
  background-color: transparent;
  padding: 0 1vw;
  border: none;
`;
const Input = styled.input`
  height: 22.4px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

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
  font-size: 2rem;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4vh;
  margin-left: 130px;
`;
const DivNameButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DivPhone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2vh;
  margin-left: 130px;
`;
const DivPhoneButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DivRoll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 130px;
`;

const DivRollButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
`;

const DivAge = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;

const DivAgeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
`;

const DivAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 10vh;
  margin-left: 130px;
`;

const DivAddressButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DivInputsAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Avatar = styled.div``;

const H6 = styled.h6`
  margin: 0;
  font-size: large;
  color: #c47335;
`;
const H3 = styled.h3`
  margin: 0;
  margin-bottom: 4vh;
  width: 70vh;
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
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isNewShippingAddress, setIsNewShippingAddress] = useState(false);
  const [isEditingShippingAddress, setIsEditingShippingAddress] = useState(
    Array(user.user.shippingAddress.length).fill(false)
  );
  const [initialShippingAddress, setInitialShippingAddress] = useState(
    user.user.shippingAddress.map((address) => ({ ...address }))
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
      address: user.user.address
        ? {
            street: user.user.address.street,
            streetNumber: user.user.address.streetNumber,
            postalCode: user.user.address.postalCode,
            townNeighborhood: user.user.address.townNeighborhood,
            floorApartment: user.user.address.floorApartment,
            city: user.user.address.city,
          }
        : {},
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
        setIsEditingPhoneNumber(false);
        setIsNewShippingAddress(false);
        setIsEditingAddress(false);
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

  const handleEditPhoneNumber = () => {
    setIsEditingPhoneNumber(true);
  };

  const handleCancelEditPhoneNumber = () => {
    setIsEditingPhoneNumber(false);
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  const handleCancelEditAddress = () => {
    setIsEditingAddress(false);
  };

  const handleEditShippingAddress = (index) => {
    // Hacer una copia de los valores actuales de shippingAddress
    const currentShippingAddress = [...formik.values.shippingAddress];
    // Hacer una copia de los valores iniciales
    const initialAddress = { ...initialShippingAddress[index] };

    // Actualizar los valores actuales con los iniciales
    currentShippingAddress[index] = initialAddress;

    // Establecer los valores actualizados en el formulario
    formik.setValues({
      ...formik.values,
      shippingAddress: currentShippingAddress,
    });

    // Activar la edición
    setIsEditingShippingAddress((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleNewShippingAddress = () => {
    console.log("apretaste el boton Agregar Dirección de Envío");
    // Agregar una nueva dirección de envío con valores iniciales vacíos
    formik.setValues({
      ...formik.values,
      shippingAddress: [
        ...formik.values.shippingAddress,
        {
          street: "",
          streetNumber: "",
          postalCode: "",
          townNeighborhood: "",
          floorApartment: "",
          city: "",
        },
      ],
    });
    setIsEditingShippingAddress((prevState) => [...prevState, true]);
  };

  const handleCancelEditShippingAddress = (index) => {
    const address = formik.values.shippingAddress[index];
    const isEmptyAddress =
      !address.street &&
      !address.streetNumber &&
      !address.postalCode &&
      !address.townNeighborhood &&
      !address.floorApartment &&
      !address.city;

    if (isEmptyAddress) {
      // Eliminar la dirección de envío vacía
      formik.setValues((prevValues) => {
        const newShippingAddress = [...prevValues.shippingAddress];
        newShippingAddress.splice(index, 1); // Eliminar el elemento en el índice especificado
        return {
          ...prevValues,
          shippingAddress: newShippingAddress,
        };
      });
    } else {
      // Restaurar los valores iniciales al cancelar la edición
      formik.setValues((prevValues) => {
        const newShippingAddress = [...prevValues.shippingAddress];
        newShippingAddress[index] = { ...initialShippingAddress[index] };
        return {
          ...prevValues,
          shippingAddress: newShippingAddress,
        };
      });

      // Desactivar la edición
      setIsEditingShippingAddress((prevState) =>
        prevState.map((editing, i) => (i === index ? false : editing))
      );
    }
  };

  return (
    <DivPrincipal>
      <Div>
        <Avatar>
          <LetteredAvatar name={fullName || "Usuario"} size={96} font />
        </Avatar>

        <DivName>
          {isEditingName ? (
            <Form onSubmit={formik.handleSubmit}>
              <Input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <Input
                type="text"
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              <ButtonCheckBan type="submit">
                <TbCheck
                  style={{ color: "green", width: "1.5vw", height: "1.5vw" }}
                />
              </ButtonCheckBan>
              <ButtonCheckBan type="button" onClick={handleCancelEditName}>
                <TbBan
                  style={{ color: "red", width: "1.5vw", height: "1.5vw" }}
                />
              </ButtonCheckBan>
            </Form>
          ) : (
            <DivNameButton>
              <H3>
                Bienvenid@, {formik.values.name} {user.user.last_name}
              </H3>
              <ButtonEdit onClick={handleEditName}>
                <TbPencilMinus style={{ width: "1.5vw", height: "1.5vw" }} />
              </ButtonEdit>
            </DivNameButton>
          )}
        </DivName>
        <div>
          <H6>Tu rol:</H6>
          <DivRollButton>
            <DivRoll>
              <H3>{roleMessage}</H3>
            </DivRoll>
            <ButtonEdit>
              <TbQuestionMark style={{ width: "1.5vw", height: "1.5vw" }} />
            </ButtonEdit>
          </DivRollButton>
        </div>
        <div>
          <H6>Telefono:</H6>
          <DivPhone>
            {isEditingPhoneNumber ? (
              <div>
                <Form onSubmit={formik.handleSubmit}>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Cual es tu numero?"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  <ButtonCheckBan type="submit">
                    <TbDeviceMobileCheck
                      style={{
                        color: "green",
                        width: "1.5vw",
                        height: "1.5vw",
                      }}
                    />
                  </ButtonCheckBan>
                  <ButtonCheckBan
                    type="button"
                    onClick={handleCancelEditPhoneNumber}
                  >
                    <TbDeviceMobileX
                      style={{ color: "red", width: "1.5vw", height: "1.5vw" }}
                    />
                  </ButtonCheckBan>
                </Form>
              </div>
            ) : user.user.phoneNumber ? (
              <DivPhoneButton>
                <H3>{user.user.phoneNumber}</H3>
                <ButtonEdit onClick={handleEditPhoneNumber}>
                  <TbDeviceMobileCog
                    style={{ width: "1.5vw", height: "1.5vw" }}
                  />
                </ButtonEdit>
              </DivPhoneButton>
            ) : (
              <ButtonEdit onClick={handleEditPhoneNumber}>
                <TbDeviceMobilePlus
                  style={{ width: "1.5vw", height: "1.5vw" }}
                />
              </ButtonEdit>
            )}
          </DivPhone>
        </div>
        <div>
          <H6>Edad:</H6>
          <DivAge>
            {isEditingAge ? (
              <div>
                <Form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="age"
                    placeholder="Que edad tienes"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                  />
                  <ButtonCheckBan type="submit">
                    <TbCheck
                      style={{
                        color: "green",
                        width: "1.5vw",
                        height: "1.5vw",
                      }}
                    />
                  </ButtonCheckBan>
                  <ButtonCheckBan type="button" onClick={handleCancelEditAge}>
                    <TbBan
                      style={{ color: "red", width: "1.5vw", height: "1.5vw" }}
                    />
                  </ButtonCheckBan>
                </Form>
              </div>
            ) : user.user.age ? (
              <DivAgeButton>
                <H3>
                  <LiaBirthdayCakeSolid
                    style={{ width: "5vw", height: "1.5vw" }}
                  />
                  {""}
                  {user.user.age}
                </H3>
                <ButtonEdit onClick={handleEditAge}>
                  <TbPencilMinus style={{ width: "1.5vw", height: "1.5vw" }} />
                </ButtonEdit>
              </DivAgeButton>
            ) : (
              <ButtonEdit onClick={handleEditAge}>
                <LiaBirthdayCakeSolid
                  style={{ width: "5vw", height: "1.5vw" }}
                />
              </ButtonEdit>
            )}
          </DivAge>
        </div>
        <div>
          <H6>Direccion:</H6>
          <DivAddress>
            {isEditingAddress ? (
              <div>
                <Form onSubmit={formik.handleSubmit}>
                  <DivInputsAddress>
                    <Input
                      type="text"
                      name="address.street"
                      placeholder="Calle"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.street}
                    />
                    <Input
                      type="text"
                      name="address.streetNumber"
                      placeholder="Numero de Calle"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.streetNumber}
                    />
                  </DivInputsAddress>
                  <DivInputsAddress>
                    <Input
                      type="text"
                      name="address.postalCode"
                      placeholder="Código Postal"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.postalCode}
                    />
                    <Input
                      type="text"
                      name="address.townNeighborhood"
                      placeholder="Barrio"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.townNeighborhood}
                    />
                  </DivInputsAddress>
                  <DivInputsAddress>
                    <Input
                      type="text"
                      name="address.floorApartment"
                      placeholder="Casa/Apartamento"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.floorApartment}
                    />
                    <Input
                      type="text"
                      name="address.city"
                      placeholder="Ciudad"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address.city}
                    />
                  </DivInputsAddress>
                  <ButtonCheckBan type="submit">
                    <TbCheck
                      style={{
                        color: "green",
                        width: "1.5vw",
                        height: "1.5vw",
                      }}
                    />
                  </ButtonCheckBan>
                  <ButtonCheckBan
                    type="button"
                    onClick={handleCancelEditAddress}
                  >
                    <TbBan
                      style={{ color: "red", width: "1.5vw", height: "1.5vw" }}
                    />
                  </ButtonCheckBan>
                </Form>
              </div>
            ) : user.user.address ? (
              <div>
                <DivAddressButton>
                  <H3>
                    {user.user.address.street} {user.user.address.streetNumber}{" "}
                    {user.user.address.postalCode && (
                      <>CP. {user.user.address.postalCode} </>
                    )}{" "}
                    {user.user.address.townNeighborhood}{" "}
                    {user.user.address.city} {user.user.address.floorApartment}
                  </H3>
                  <ButtonEdit onClick={handleEditAddress}>
                    <TbPencilMinus
                      style={{ width: "1.5vw", height: "1.5vw" }}
                    />
                  </ButtonEdit>
                </DivAddressButton>
              </div>
            ) : (
              <button onClick={handleEditAddress}>
                {" "}
                <TbPencilMinus style={{ width: "1.5vw", height: "1.5vw" }} />
              </button>
            )}
          </DivAddress>
        </div>
        <div>
          <H6>Direccion de envio:</H6>
          <DivAddress>
            {formik.values.shippingAddress.map((address, index) => (
              <DivDirection key={index}>
                {isEditingShippingAddress[index] ? (
                  <div>
                    <Form onSubmit={formik.handleSubmit}>
                      <DivInputsAddress>
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].street`}
                          placeholder="Calle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.shippingAddress[index].street}
                        />
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].streetNumber`}
                          placeholder="Numero de Calle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.shippingAddress[index].streetNumber
                          }
                        />
                      </DivInputsAddress>
                      <DivInputsAddress>
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].postalCode`}
                          placeholder="Código Postal"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.shippingAddress[index].postalCode
                          }
                        />
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].townNeighborhood`}
                          placeholder="Barrio"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.shippingAddress[index]
                              .townNeighborhood
                          }
                        />
                      </DivInputsAddress>
                      <DivInputsAddress>
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].floorApartment`}
                          placeholder="Casa/Apartamento"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.shippingAddress[index].floorApartment
                          }
                        />
                        <Input
                          type="text"
                          name={`shippingAddress[${index}].city`}
                          placeholder="Ciudad"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.shippingAddress[index].city}
                        />
                      </DivInputsAddress>
                      <ButtonCheckBan type="submit">
                        <TbCheck
                          style={{
                            color: "green",
                            width: "1.5vw",
                            height: "1.5vw",
                          }}
                        />
                      </ButtonCheckBan>
                      <ButtonCheckBan
                        type="button"
                        onClick={() => handleCancelEditShippingAddress(index)}
                      >
                        <TbBan
                          style={{
                            color: "red",
                            width: "1.5vw",
                            height: "1.5vw",
                          }}
                        />
                      </ButtonCheckBan>
                    </Form>
                  </div>
                ) : (
                  <DivEdit>
                    <div>
                      <DivAddressButton>
                        <H3>
                          {address.street} {address.streetNumber}{" "}
                          {address.postalCode && <>CP. {address.postalCode} </>}{" "}
                          {address.townNeighborhood} {address.city}{" "}
                          {address.floorApartment}{" "}
                          {address.additionalInformation}
                        </H3>
                        <ButtonEdit
                          onClick={() => {
                            // Iniciar la edición
                            setIsEditingShippingAddress((prevState) => {
                              // Verificar si prevState es un array, si no, inicializarlo como un array vacío
                              if (!Array.isArray(prevState)) {
                                prevState = [];
                              }
                              const newState = [...prevState];
                              newState[index] = true; // Establecer el valor en true para el índice específico
                              return newState; // Devolver el nuevo estado
                            });
                          }}
                        >
                          <TbPencilMinus
                            style={{ width: "1.5vw", height: "1.5vw" }}
                          />
                        </ButtonEdit>
                      </DivAddressButton>
                    </div>
                  </DivEdit>
                )}
              </DivDirection>
            ))}
            {/* Mostrar el botón "Agregar Dirección de Envío" solo si no hay direcciones de envío */}
            {formik.values.shippingAddress.length === 0 && (
              <button onClick={handleNewShippingAddress}>
                Agregar Dirección de Envío
              </button>
            )}
          </DivAddress>
        </div>
      </Div>
    </DivPrincipal>
  );
};

export default Profile;
