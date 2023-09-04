
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledForm, Input, P, H3, H5, Div, DivPrincipal } from "../LogIn/LogInStyledComponent"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangePassword = () => {
  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    setSavedToken(token);
  }, []);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [savedToken, setSavedToken] = useState('');

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      try {
        const requestBody = {
          token: savedToken,
          newPassword,
        };

        const response = await axios.post(
          'http://localhost:3004/api/v1/auth/changePassword',
          requestBody
        );
console.log(response)
        if (response.status === 200) {
          // La solicitud fue exitosa, mostrar notificación de éxito
          
          toast.success('Contraseña cambiada con éxito');
        } else {
          // La solicitud no fue exitosa, mostrar notificación de error
          toast.error('Error al cambiar la contraseña');
        }
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
        toast.error('Error al cambiar la contraseña');
      }
    } else {
      setErrorMessage('Las contraseñas no coinciden');
    }
  };

  return (
    <DivPrincipal>
      <StyledForm>
        <H3>Restablecer Contraseña</H3>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <H5>Ingresa tu nueva contraseña:</H5>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Nueva contraseña"
        />
        <H5>Confirma tu nueva contraseña:</H5>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar nueva contraseña"
        />
        
        <button type="button" onClick={handlePasswordChange}>Cambiar contraseña</button>
        <ToastContainer />
      </StyledForm>
    </DivPrincipal>
  );
};

export default ChangePassword;