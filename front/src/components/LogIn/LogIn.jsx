import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import MyButton from '../Buttons/MainButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "../../redux/Actions/authAction"
import { StyledForm, Input, P, H3, H3O, H5, Div, DivPrincipal } from "./LogInStyledComponent"

const LogIn = () => {
    const [activeField, setActiveField] = useState(null);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({

            email: Yup.string()
                .required('requiere un email')
                .email('email no valida'),
            password: Yup.string()
                .required('Contraseña requerida')
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                    'La contraseña debe contener al menos una letra, un número y un carácter especial')
        }),

        onSubmit: async (formData) => {
            try {
                console.log(formData);

                // Aquí puedes realizar las acciones necesarias para enviar los datos al servidor
                dispatch(login(formData.email, formData.password));

            } catch (error) {
                console.error('Error al enviar el formulario', error);
            }
        },
    })
    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         console.log(tokenResponse);

    //         try {
    //             const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //                 headers: {
    //                     Authorization: `Bearer ${tokenResponse.access_token}`,
    //                 },
    //             });

    //             console.log(userInfoResponse.data);
    //             const userEmail = userInfoResponse.data.email;

    //             // Aquí puedes manejar la información del perfil del usuario
    //         } catch (error) {
    //             console.error('Error al obtener el perfil del usuario', error);
    //         }
    //     },
    //     onError: errorResponse => console.log(errorResponse),
    // });

    const handleFieldClick = (fieldName) => {
        setActiveField(fieldName);
    }

    const clearActiveField = () => {
        setActiveField(null);
    }



    return (
        <>
            <DivPrincipal>

                <StyledForm onSubmit={formik.handleSubmit}>
                    <Div>
                        <H5>Inicia sesion.</H5>
                        <H3>Ya Soy Miembro!</H3>
                    </Div>

                    <Input
                        type="text"
                        placeholder='Tu Correo Electronico'
                        name='email'
                        error={formik.touched.email && formik.errors.email}
                        onClick={() => handleFieldClick('email')}
                        onBlur={clearActiveField}
                        autoComplete="off"
                        style={{ maxWidth: '98%' }}
                        onChange={formik.handleChange} />

                    <Input
                        type="password"
                        placeholder='Tu Contraseña'
                        name='password'
                        error={formik.touched.password && formik.errors.password}
                        onClick={() => handleFieldClick('password')}
                        onBlur={clearActiveField}
                        style={{ maxWidth: '98%' }}
                        onChange={formik.handleChange} />

                    <MyButton text="Ingresar" variant="inicio" type="submit" />



                    {activeField === 'email' && <P error={formik.errors.email}> {formik.errors.email} </P>}
                    {activeField === 'password' && <P error={formik.errors.password}> {formik.errors.password} </P>}

                </StyledForm>
                <H3O>O</H3O>
                <Link to="http://localhost:3004/api/v1/auth/google">
                    <MyButton
                        className="google-button"
                        icon={<FcGoogle />}
                        text=" Ingresa con Google"
                        route=""
                        variant="inicio"
                        type="button">
                    </MyButton>
                </Link>
            </DivPrincipal>

        </>
    );
}

export default LogIn;