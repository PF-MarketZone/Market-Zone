import { useFormik } from "formik";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { backendUrl } from "../../deployConfig";
import { login } from "../../redux/Actions/authAction";
import MyButton from "../Buttons/MainButton";
import {
  Div,
  DivPrincipal,
  H3,
  H3O,
  H5,
  Input,
  P,
  StyledForm,
} from "./LogInStyledComponent";

const LogIn = () => {
  const [activeField, setActiveField] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("requiere un email")
        .email("email no valida"),
      password: Yup.string()
        .required("Contraseña requerida")
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
          "La contraseña debe contener al menos una letra, un número y un carácter especial"
        ),
    }),

    onSubmit: async (formData) => {
      try {
        const loginC = await dispatch(login(formData.email, formData.password));
        !loginC
          ? alert(`Error al iniciar sesión, usuario o contraseña incorrectos`)
          : navigate("/home");
      } catch (error) {
        console.error("Error al enviar el formulario", error);
      }
    },
  });

  const handleFieldClick = (fieldName) => {
    setActiveField(fieldName);
  };

  const clearActiveField = () => {
    setActiveField(null);
  };

  const openGoogleAuth = () => {
    window.location.href = `${backendUrl}/auth/google`;
    // console.log("precionaste el boton");
  };

  return (
    <>
      <DivPrincipal>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Div>
            <H3>Ya estoy registrado!</H3>
            <H5>Inicia sesión.</H5>
          </Div>

          <Input
            type="text"
            placeholder="Correo Electrónico"
            name="email"
            error={formik.touched.email && formik.errors.email}
            onClick={() => handleFieldClick("email")}
            onBlur={clearActiveField}
            autoComplete="off"
            style={{ maxWidth: "98%" }}
            onChange={formik.handleChange}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            name="password"
            error={formik.touched.password && formik.errors.password}
            onClick={() => handleFieldClick("password")}
            onBlur={clearActiveField}
            style={{ maxWidth: "98%" }}
            onChange={formik.handleChange}
          />

          <MyButton text="Ingresar" variant="inicio" type="submit" />

          {activeField === "email" && (
            <P error={formik.errors.email}> {formik.errors.email} </P>
          )}
          {activeField === "password" && (
            <P error={formik.errors.password}> {formik.errors.password} </P>
          )}
        </StyledForm>
        <H3O>O</H3O>

        <MyButton
          className="google-button"
          icon={<FcGoogle />}
          text=" Ingresa con Google"
          variant="inicio"
          type="button"
          onClick={openGoogleAuth}
        ></MyButton>
        <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link>
      </DivPrincipal>
    </>
  );
};

export default LogIn;
