import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import {
  DivLastLine,
  DivLineCenter,
  DivLineLeft,
  DivLineRigth,
  DivMain,
  DivOneLine,
  DivSocialMedia,
  H6,
  LogoImg,
} from "./footerStyledComponent";

const Footer = () => {
  return (
    <>
      <DivMain>
        <DivOneLine>
          <DivLineLeft></DivLineLeft>
          <DivSocialMedia>
            <Link
              to="https://github.com/PF-MarketZone/Market-Zone.git"
              style={{ textDecoration: "none", color: "#fbfbf3ff" }}
            >
              <AiFillGithub />
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "#fbfbf3ff" }}>
              <AiFillLinkedin />
            </Link>
          </DivSocialMedia>
          <DivLineRigth></DivLineRigth>
        </DivOneLine>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <LogoImg src={Logo} alt="logo no disponible" />
        </Link>
        <H6>Copyright©2023 PF-MarketZone</H6>
        <DivLastLine>
          <H6>Información legal</H6>
          <DivLineCenter />
          <H6>Políticas de privacidad</H6>
        </DivLastLine>
      </DivMain>
    </>
  );
};

export default Footer;
