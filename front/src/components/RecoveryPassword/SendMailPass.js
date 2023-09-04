import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledForm, Input, P, H3, H5, Div, DivPrincipalReset } from "../LogIn/LogInStyledComponent";

const Reset = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetRequest = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:3004/api/v1/auth/recovery',
        { email }
      );

      if (response.status === 200) {
        toast.success('¡Enlace enviado!');
      } else {
        toast.error('Error al enviar el enlace.');
      }
    } catch (error) {
      toast.error('Error al enviar el enlace.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DivPrincipalReset>
      <ToastContainer />
      <h3>¿Tienes problemas para iniciar sesión?</h3>
      <h5>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</h5>
<StyledForm> <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={handleEmailChange}
      /></StyledForm>
     

      <button onClick={handleResetRequest} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar enlace'}
      </button>
    </DivPrincipalReset>
  );
};

export default Reset;
