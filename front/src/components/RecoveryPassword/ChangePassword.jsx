import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledForm, Input, P, H3, H5, Div, DivPrincipal, CenteredContainer } from "../LogIn/LogInStyledComponent"
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

  // Función para verificar si la contraseña cumple con los requisitos
  const isPasswordValid = (password) => {
    // Debe tener al menos 6 caracteres
    if (password.length < 6) {
      return false;
    }
    // Debe contener al menos una letra y un número
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
  };

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      if (isPasswordValid(newPassword)) {
        try {
          const requestBody = {
            token: savedToken,
            newPassword,
          };

          const response = await axios.post(
            'http://localhost:3004/api/v1/auth/changePassword',
            requestBody
          );
          if (response.status === 200) {
            toast.success('Contraseña cambiada con éxito');
            setNewPassword('');
            setConfirmPassword('');
          } else {
            toast.error('Error al cambiar la contraseña');
         
          };
        } catch (error) {
          console.error('Error al cambiar la contraseña:', error);
          toast.error('Error al cambiar la contraseña');
        }
      } else {
        setErrorMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números');
      }
    } else {
      setErrorMessage('Las contraseñas no coinciden');
    }
    
  };

  return (
    <DivPrincipal>
    
      <StyledForm>
        <H3>Restablecer Contraseña</H3>
        <H5>
          Ingresa tu nueva contraseña* 
          <p style={{ color: 'violet' }}>*Mínimo 6 caracteres. Debe contener letras y números.</p>
        </H5>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
        
        <button type="button" onClick={handlePasswordChange}>
          Cambiar contraseña
        </button>
        <ToastContainer />
      </StyledForm>
    </DivPrincipal>
  );
};

export default ChangePassword;
