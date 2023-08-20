import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import MyButton from '../Buttons/MainButton';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StyledForm = styled.form`
        background-color: #1D1E18;
       width: 30%;
       border: 1px solid #8B3DFF;
       border-radius: 20px;
       padding:5vh;
       height: 30%;
    `;

const Input = styled(({ value, error, ...rest }) => <input {...rest} />)`
    color: ${props => props.value === '' ? '#777676' : '#1d1e18'};
    background-color: ${props => props.error ? '#f17f7f79' : '#fbfbf2'};
    border: solid 1px #4e4e4e;
    border-radius: 5px;
    width: 100%;
    padding: 1px 0px;
    padding-left: 4px;
    margin: 6px 0px;
    

    + p {
        display: ${props => props.error ? 'block' : 'none'};
        color: red;
        position: absolute;
        bottom: 0vh;
        width: 30%;
    }
`;

const SelectContainer = styled.div`
    position: relative;
    width: 100%;
`;

const CustomSelect = styled(({ error, value, ...rest }) => <select {...rest} />)`
    /* Estilos generales */
    width: 100%;
    min-height: 2.5em;
    padding: 1px 0px;
    border: 1px solid #4e4e4e;
    border-radius: 5px;
    background-color: #fbfbf2;
    margin: 6px 0px;
    
    
    /* Estilo cuando una opción está seleccionada */
    color: ${props => props.value === '' ? '#777676' : 'white'};
    font-weight: ${props => props.value === '' ? '300' : 'normal'};

    + p {
        display: ${props => props.error ? 'block' : 'none'};
        color: red;
        position: absolute;
        bottom: -16vh; /* Ajusta esto según sea necesario */
        left: 0;
        width: 100%;
    }
    background-color: ${props => props.error ? '#f17f7f79' : '#fbfbf2'};
`;

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

const DivName = styled.div`
    display: flex;
    justify-content: space-between;
`


const SignUp = () => {
    //const history = useHistory(); // Importa useHistory
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
                    <H5>Comience gratis.</H5>
                    <H3>Crea tu cuenta.</H3>
                </Div>
                <MyButton icon={<FcGoogle />} text=" Registrar con Google" route="" variant="inicio" type="button"></MyButton>
                <H3O>O</H3O>
                <DivName>
                    <Input
                        type="text"
                        placeholder='Nombre'
                        name='name'
                        error={formik.touched.name && formik.errors.name}
                        onClick={() => handleFieldClick('name')}
                        //onBlur={clearActiveField}
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
        </>
    );
}

export default SignUp;