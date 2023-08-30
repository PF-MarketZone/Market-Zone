import React from "react";
import styled from "styled-components";
import LogIn from "../../components/LogIn/LogIn"
import SignUp from "../../components/SignUp/SignUp"
import Logo from '../../images/Logo.png'
import { Link } from "react-router-dom";

const Div = styled.div`
    display: flex;
    padding: 5vh;
    padding-top: 5vh;
    justify-content: space-evenly;
`
const DivPrincipal = styled.div`
background-color: #d1d1d1ff;

`

const ImgLogo = styled.img`
    width: 30vw;

`

const LogInSignUp = () => {
    return (
        <DivPrincipal>
            <Link to="/home">
                <ImgLogo src={Logo} alt="logo no disponible" />
            </Link>
            <Div>
                <LogIn />
                <SignUp />
            </Div>
        </DivPrincipal>
    )
}

export default LogInSignUp;