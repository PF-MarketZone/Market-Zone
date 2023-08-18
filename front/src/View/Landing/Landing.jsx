import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import MyButton from '../../components/Buttons/MainButton';
import videoSourceMp4 from '../../images/animationLanding.mp4';
import videoSourceWebm from '../../images/animationLanding.webm';
import Logo from '../../images/Logo.png'
import TiendaOnline from '../../images/tiendaenlinea.png'

const VideoBackground = styled(({ videoPlayed, ...rest }) => <video {...rest} />)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  display: ${props => props.videoPlayed ? 'none' : 'block'};
`;

const ContentContainer = styled(({ showContent, ...rest }) => <div {...rest} />)`
  display: ${props => props.showContent ? 'block' : 'none'};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 20vw;

`
const ContentDiv = styled.div`
    display: flex;
    align-items: center;
`
const DivPrin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`
const ImgLogo = styled.img`
    width: 30vw;

`
const ImgTienda = styled.img`
    width: 20vw;

`

const Landing = (props) => {
    const [showContent, setShowContent] = useState(false);
    const [videoPlayed, setVideoPlayed] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video-background');

        video.addEventListener('ended', () => {
            setVideoPlayed(true);
        });

        return () => {
            video.removeEventListener('ended', () => { });
        };
    }, []);

    useEffect(() => {
        if (videoPlayed) {
            setShowContent(true);
        }
    }, [videoPlayed]);

    return (
        <>
            <VideoBackground id="video-background" autoPlay muted videoPlayed={videoPlayed}>
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
                        <h3>Muéstrale al mundo de lo que eres capaz</h3>
                        <h1>Crea Tu Tienda <br /> En Linea Facil</h1>
                    </div>
                    <div>
                        <MyButton text="Ir a la página de inicio" route="/home" variant="inicio" />
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
