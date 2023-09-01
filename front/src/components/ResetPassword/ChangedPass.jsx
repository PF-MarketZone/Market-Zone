
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/Actions/authAction';
import { StyledForm, Input, P, H3,  H5, Div, DivPrincipalReset } from "../LogIn/LogInStyledComponent"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert2';

const ChangePassword = () => {
   // const { token } = useParams();


     useEffect(() => {
      const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
     //console.log(token)
    // Guardar el token en el estado
    setSavedToken(token);

    }, []);
    
   
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   const [savedToken, setSavedToken] = useState('');
    const dispatch = useDispatch();
    
     const handlePasswordChange = () => {
      if (newPassword === confirmPassword) {
        dispatch(changePassword(savedToken, newPassword));

      } else {
        setErrorMessage("Las contraseñas no coinciden");
      }
    };

     const alert = useSelector(state => state.auth.successMessage);
  console.log(alert)
   
   
    
    useEffect(() => {
      if (alert) {
        swal({
          title: 'Contraseña cambiada con éxito',
          icon: 'success',
        });
      }
    }, [alert]);
    return (
        <DivPrincipalReset>
            <StyledForm>
          <H3>Restablecer Contraseña</H3>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <p>Ingresa tu nueva contraseña:</p>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nueva contraseña"
          />
          <p>Confirma tu nueva contraseña:</p>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar nueva contraseña"
          />
          <button onClick={handlePasswordChange}>Cambiar contraseña</button>

          {/* {alert && <div className="success-message">{swal({title:"Contraseña cambiada con éxito", icon: success})}</div>} */}
          </StyledForm>
        </DivPrincipalReset>
      );
    
};
export default ChangePassword;