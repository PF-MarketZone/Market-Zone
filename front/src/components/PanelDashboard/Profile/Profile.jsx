import React from "react";
import { useSelector } from "react-redux";
import LetteredAvatar from 'react-lettered-avatar';
import { styled } from "styled-components";

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const DivName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
`
const DivRoll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Avatar = styled.div`
    margin: 2rem;
    margin-left: 0;
`
const H6 = styled.h6`
    margin: 0;
`
const H3 = styled.h3`
    margin: 0;
`


const Profile = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const roll = user.user.role[0]
    console.log(roll);

    // Define un objeto de roles y sus respectivos mensajes
    const roleMessages = {
        "64e550fe0498e3825c3a87e1": "Administrador",
        "64e550fe0498e3825c3a87e2": "Comprador",
        "64e550fe0498e3825c3a87e3": "Vendedor"
    };

    // Obtén el mensaje de rol basado en el ID del rol del usuario
    const roleMessage = roleMessages[user.user.role[0]] || "Rol desconocido";

    const firstName = user.user.name[0] || "";
    const lastName = user.user.last_name[0] || "";
    const fullName = `${firstName} ${lastName}`.trim();

    return (
        <DivPrincipal>
            <Div>
                <h1>Profile</h1>
                <Avatar>
                <LetteredAvatar
                    name={fullName || "Usuario"}
                    size={80}
                    font
                />
                </Avatar>
                <DivName>
                    <H6>Nombre:</H6>
                    <H3>{user.user.name} {user.user.last_name}</H3>
                </DivName>
                <DivRoll>
                    <H6>Rol:</H6>
                    <H3>{roleMessage}</H3>
                </DivRoll>

            </Div>
        </DivPrincipal>
    );
}

export default Profile;





