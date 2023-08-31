import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPasswordReset } from '../../redux/Actions/authAction';
import { StyledForm, Input, P, H3,  H5, Div, DivPrincipalReset } from "../LogIn/LogInStyledComponent"
const Reset = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const resetRequestSuccess = useSelector(state => state.auth.resetRequestSuccess);
  const resetRequestError = useSelector(state => state.auth.resetRequestError);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetRequest = () => {
    dispatch(requestPasswordReset(email));
  };

  return (
  
    <DivPrincipalReset>
    <StyledForm>
      <Div>
        <H3>¿Tienes problemas para iniciar sesión?</H3>
        <H5>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</H5>
      </Div>

      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={handleEmailChange} 
      />

<button onClick={handleResetRequest}>Enviar enlace</button>
      {resetRequestSuccess && <P>¡Enlace enviado!</P>}
      {resetRequestError && <P>Error: {resetRequestError.message}</P>}
      
    </StyledForm>
  </DivPrincipalReset>
  );
};

export default Reset;
