import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledForm,
  Input,
  P,
  H3,
  H5,
  Div,
  DivPrincipal,
  DivPrincipal2
} from "../LogIn/LogInStyledComponent";
import { backendUrl } from "../../deployConfig";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handleResetRequest = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${backendUrl}/auth/recovery`, {
        email,
      });
      //console.log("En reset FRONT", response)
      if (response.status === 200) {
        toast.success("¡Enlace enviado! Revisa tu correo");
      } else {
        toast.error("Error al enviar el enlace.");
      }
    } catch (error) {
      toast.error("Error al enviar el enlace.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DivPrincipal2>
      <ToastContainer />
      <h3>¿Tienes problemas para iniciar sesión?</h3>
      <h5>
        Ingresa tu correo electrónico y te enviaremos un enlace para que
        recuperes el acceso a tu cuenta.
      </h5>
      <StyledForm>
        {" "}
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
      </StyledForm>

      <button onClick={handleResetRequest} disabled={!isValidEmail || loading}>
        {loading ? "Enviando..." : "Enviar enlace"}
      </button>
    </DivPrincipal2>
  );
};

export default Reset;
