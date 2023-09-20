import React, { useEffect, useState } from "react";
import MyButton from "../../components/Buttons/MainButton";
import Logo from "../../images/Logo.png";
import videoSourceMp4 from "../../images/animationLanding.mp4";
import videoSourceWebm from "../../images/animationLanding.webm";
import TiendaOnline from "../../images/tiendaenlinea.png";
import {
  ContentContainer,
  ContentDiv,
  Div,
  DivPrin,
  H1,
  H3,
  ImgLogo,
  ImgTienda,
  VideoBackground,
} from "./LandingStyledComponen";

const Landing = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    const video = document.getElementById("video-background");

    video.addEventListener("ended", () => {
      setVideoPlayed(true);
    });

    return () => {
      video.removeEventListener("ended", () => {});
    };
  }, []);

  useEffect(() => {
    if (videoPlayed) {
      setShowContent(true);
    }
  }, [videoPlayed]);

  return (
    <>
      <VideoBackground
        id="video-background"
        autoPlay
        muted
        videoPlayed={videoPlayed}
      >
        <source src={videoSourceMp4} type="video/mp4" />
        <source src={videoSourceWebm} type="video/webm" />
        Tu navegador no admite el elemento de video.
      </VideoBackground>
      <ContentContainer showContent={showContent}>
        <DivPrin>
          <ImgLogo src={Logo} alt="logo no disponible" />
          <ContentDiv>
            <Div>
              <div>
                <H3>Muéstrale al mundo de lo que eres capaz</H3>
                <H1>
                  Crea Tu Tienda <br /> En Linea Fácil
                </H1>
              </div>
              <div>
                <MyButton
                  text="Ir a la página de inicio"
                  route="/home"
                  variant="inicio"
                />
              </div>
            </Div>
            <Div>
              <ImgTienda src={TiendaOnline} alt="" />
            </Div>
          </ContentDiv>
        </DivPrin>
      </ContentContainer>
    </>
  );
};

export default Landing;
