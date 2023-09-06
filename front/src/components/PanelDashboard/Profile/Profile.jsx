import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LetteredAvatar from 'react-lettered-avatar';
import { styled } from "styled-components";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { putInfoProfile } from "../../../redux/Actions/userAction"

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Div = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const DivDirection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const DivName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
`
const DivRoll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Avatar = styled.div`
    margin: 2rem;
    margin-left: 0;
`
const H6 = styled.h6`
    margin: 0;
`
const H3 = styled.h3`
    margin: 0;
`
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

    // Define un objeto de roles y sus respectivos mensajes
    const roleMessages = {
        "admin": "Administrador",
        "customer": "Comprador",
        "seller": "Vendedor"
    };

    // Obtén el mensaje de rol basado en el ID del rol del usuario
    const roleMessage = roleMessages[user.user.role[0]] || "Rol desconocido";

    const firstName = user.user.name[0] || "";
    const lastName = user.user.last_name[0] || "";
    const fullName = `${firstName} ${lastName}`.trim();

    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        street: "",
        streetNumber: "",
        postalCode: "",
    });


    const formik = useFormik({
        initialValues: {
            name: user.user.name || '',
            last_name: user.user.last_name || '',
            age: user.user.age || '',
            // Agrega otros campos del usuario que desees editar aquí
        },
        validationSchema: validationSchema, // Define tu esquema de validación
        onSubmit: async (formData, { resetForm }) => {
            console.log(formData);
            try {
                // Realiza una acción para editar el usuario, por ejemplo, dispatch a Redux
                await dispatch(putInfoProfile(user.user._id, formData));
                alert('Usuario editado con éxito');
                setIsEditing(false); // Restablece el formulario
            } catch (error) {
                console.error('Error al editar el usuario:', error);
                alert('No se pudo editar el usuario');
            }
        },
    });

    const handleEditName = () => {
        setIsEditing(true);
    };

    const handleCancelEditName = () => {
        setIsEditing(false);
    };


    // El formulario aquí contendría campos para editar los datos del usuario, como nombre, apellido, edad, etc.
    // Usa formik.values y formik.handleChange para conectar los campos del formulario a formik


    return (
        <DivPrincipal>
            <Div>
                <Avatar>
                    <LetteredAvatar
                        name={fullName || "Usuario"}
                        size={80}
                        font
                    />
                </Avatar>
                            <DivRoll>
                                <H6>Rol:</H6>
                                <H3>{roleMessage}</H3>
                                <button>?</button>
                            </DivRoll>
                <DivName>
                    <H6>Nombre:</H6>
                    {isEditing ? (
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
                            <button type="button" onClick={handleCancelEditName}>Cancelar</button>
                        </form>
                    ) : (
                        <>
                            <H3>{formik.values.name} {user.user.last_name}</H3>
                            <button onClick={handleEditName}>Editar</button>
                        </>
                    )}
                </DivName>
                <div>
                    <H6>edad:</H6>
                    <H3>{user.user.age}</H3>
                </div>
                <div>
                    <H6>direcciones de envío:</H6>
                    {Array.isArray(user.user.shippingAddress) && user.user.shippingAddress.length === 0 ? (
                        <form onSubmit={formik.handleSubmit}>
                            <label>Calle:</label>
                            <input
                                type="text"
                                name="street"
                                placeholder="Nombre de la calle"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <br />

                            <label>Número de Calle:</label>
                            <input 
                            type="text" 
                            name="streetNumber"
                             placeholder="Nuemero de la calle"
                             onChange={formik.handleChange}
                             value={formik.values.name} />
                            <br />

                            <label>Código Postal:</label>
                            <input 
                            type="text" 
                            name="postalCode"
                             placeholder="Codigo postal"
                             onChange={formik.handleChange}
                             value={formik.values.name}
                              />
                            <br />
                            <button type="submit">Guardar Dirección</button>
                        </form>) : (
                        <div>
                            {user.user.shippingAddress.map((address, index) => (
                                <DivDirection key={index}>
                                    <H3>
                                        {address.street} {address.streetNumber} CP. {address.postalCode} {address.townNeighborhood} {address.city} {address.floorApartment} {address.additionalInformation}
                                    </H3>
                                    <button onClick={() => {
                                        setIsEditing(true);
                                        setFormData({
                                            street: address.street,
                                            streetNumber: address.streetNumber,
                                            postalCode: address.postalCode,
                                        });
                                    }}>Editar Dirección</button>
                                </DivDirection>
                            ))}
                        </div>
                    )}
                </div>
            </Div>
        </DivPrincipal>
    );
}

export default Profile;
