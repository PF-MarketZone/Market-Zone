import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import MyButton from '../Buttons/MainButton';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "../../redux/Actions/authAction"


const StyledForm = styled.form`
       background-color: #1D1E18;
       width: 30%;
       border: 1px solid #8B3DFF;
       border-radius: 20px;
       padding:5vh;
       height: 30%;
    `;

const Input = styled(({ value, ...rest }) => <input {...rest} />)`
    color: ${props => props.value === '' ? '#777676' : '#1d1e18'};
    background-color: ${props => props.error ? '#f17f7f79' : '#fbfbf2'};
    border: solid 1px #4e4e4e;
    border-radius: 5px;
    width: 100%;
    padding: 1px 0px;
    padding-left: 4px;
    margin: 6px 0px;
    height: 5vh;
`;

const P = styled(({ error, ...rest }) => <p {...rest} />)`
    display: ${props => props.error ? 'block' : 'none'};
    color: red;
    position: absolute ;
    width: 30%;
`

const H3 = styled.h3`
    margin: 1px 0 25px 0;
    font-size: 20px;
    font-weight: 500;
    
    `
const H3O = styled.h3`
        margin: 15px 0;
    `
const H5 = styled.h5`
    margin: 6px 0 0 0;
    font-size: 16px;
    font-weight: 300;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const LogIn = () => {
    //const history = useHistory(); // Importa useHistory
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

            <StyledForm onSubmit={formik.handleSubmit}>
                <Div>
                    <H5>Inicia sesion.</H5>
                    <H3>Ya Soy Miembro!</H3>
                </Div>
                <Link to="http://localhost:3004/api/v1/auth/google">
                <MyButton
                    icon={<FcGoogle />}
                    text=" Ingresa con Google"
                    route=""
                    variant="inicio"
                    type="button"
                    /* onClick={login()} */>
                </MyButton>
                </Link>
                <H3O>O</H3O>

                <Input
                    type="text"
                    placeholder='Tu Correo Electronico'
                    name='email'
                    error={formik.touched.email && formik.errors.email}
                    onClick={() => handleFieldClick('email')}
                    //onBlur={clearActiveField}
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

        </>
    );
}

export default LogIn;