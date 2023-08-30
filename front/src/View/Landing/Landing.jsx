import React, { useEffect, useState } from 'react';
import MyButton from '../../components/Buttons/MainButton';
import videoSourceMp4 from '../../images/animationLanding.mp4';
import videoSourceWebm from '../../images/animationLanding.webm';
import Logo from '../../images/Logo.png';
import TiendaOnline from '../../images/tiendaenlinea.png';
import { VideoBackground, ContentContainer, Div, ContentDiv, DivPrin, ImgLogo, ImgTienda} from './LandingStyledComponen';

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
