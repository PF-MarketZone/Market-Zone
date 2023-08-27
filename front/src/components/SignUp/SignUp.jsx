import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import MyButton from '../Buttons/MainButton';
import {StyledForm, SelectContainer, Input, CustomSelect, H3, H3O, H5, Div, DivName, DivPrincipal } from './singUpStyledComponent';

const SignUp = () => {
    const [activeField, setActiveField] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            lastNames: "",
            email: "",
            password: "",
            confirmPassword: "",
            userType: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('requiere un nombre').min(2, 'cantidad de caracteres insuficiente'),
            lastNames: Yup.string().required('requiere un apellido').min(2, 'cantidad de caracteres insuficiente'),
            email: Yup.string()
                .required('requiere un email')
                .email('email no valida'),
            password: Yup.string()
                .required('Contraseña requerida')
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                    'La contraseña debe contener al menos una letra, un número y un carácter especial'),
            confirmPassword: Yup.string()
                .required('Confirmación de contraseña requerida')
                .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
            userType: Yup.string().required('Selecciona un tipo de usuario'),
        }),

        onSubmit: async (formData) => {
            try {
                console.log(formData);

                // Aquí puedes realizar las acciones necesarias para enviar los datos al servidor

                // Simulación de éxito (eliminar esto y reemplazarlo con tu lógica de envío real)
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Redirigir solo si el envío es exitoso
                history.push('/home');
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
                    <H5>Comience gratis.</H5>
                    <H3>Crea tu cuenta.</H3>
                </Div>
                <DivName>
                    <Input
                        type="text"
                        placeholder='Nombre'
                        name='name'
                        error={formik.touched.name && formik.errors.name}
                        onClick={() => handleFieldClick('name')}
                        onBlur={clearActiveField}
                        autoComplete="off"
                        style={{ marginRight: '6px' }}
                        onChange={formik.handleChange} />

                    {activeField === 'name' && <p error={formik.errors.name}> {formik.errors.name} </p>}

                    <Input
                        type="text"
                        placeholder='Apellidos'
                        name='lastNames'
                        error={formik.touched.lastNames && formik.errors.lastNames}
                        onClick={() => handleFieldClick('lastNames')}
                        onBlur={clearActiveField}
                        autoComplete="off"
                        style={{ marginLeft: '6px' }}
                        onChange={formik.handleChange} />
                    {activeField === 'lastNames' && <p error={formik.errors.lastNames}> {formik.errors.lastNames} </p>}

                </DivName>

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
                {activeField === 'email' && <p error={formik.errors.email}> {formik.errors.email} </p>}

                <Input
                    type="password"
                    placeholder='Tu Contraseña'
                    name='password'
                    error={formik.touched.password && formik.errors.password}
                    onClick={() => handleFieldClick('password')}
                    onBlur={clearActiveField}
                    style={{ maxWidth: '98%' }}
                    onChange={formik.handleChange} />
                {activeField === 'password' && <p error={formik.errors.password}> {formik.errors.password} </p>}

                <Input
                    type="password"
                    placeholder='Repite Tu Contraseña'
                    name='confirmPassword'
                    error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    onClick={() => handleFieldClick('confirmPassword')}
                    onBlur={clearActiveField}
                    style={{ maxWidth: '98%' }}
                    onChange={formik.handleChange} />
                {activeField === 'confirmPassword' && <p error={formik.errors.confirmPassword}> {formik.errors.confirmPassword} </p>}

                <SelectContainer>
                    <CustomSelect
                        name="userType"
                        value={formik.values.userType}
                        onChange={formik.handleChange}
                        onClick={() => handleFieldClick('userType')}
                        onBlur={clearActiveField}
                        error={formik.touched.userType && formik.errors.userType}
                        style={{ marginBottom: '12px' }}
                    >
                        <option value="">Selecciona un tipo de usuario</option>
                        <option value="vendedor">Vendedor</option>
                        <option value="comprador">Comprador</option>
                    </CustomSelect>
                    {activeField === 'userType' && <p error={formik.errors.userType}> {formik.errors.userType} </p>}
                </SelectContainer>

                <MyButton text="registrar" variant="inicio" type="submit" />
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

export default SignUp;