import styled from 'styled-components';

export const VideoBackground = styled(({ videoPlayed, ...rest }) => <video {...rest} />)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  display: ${props => props.videoPlayed ? 'none' : 'block'};
`;

export const ContentContainer = styled(({ showContent, ...rest }) => <div {...rest} />)`
  display: ${props => props.showContent ? 'block' : 'none'};
  background-color: #1d1e18ff;
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 20vw;

`
export const ContentDiv = styled.div`
    display: flex;
    align-items: center;
`
export const DivPrin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
`
export const ImgLogo = styled.img`
    width: 30vw;

`
export const ImgTienda = styled.img`
    width: 20vw;

`
export const H1 = styled.h1`
    font-size: 3.5rem;
    color:#fbfbf3ff;
    margin: 2vh 0;
    `
export const H3 = styled.h3`
margin-bottom: 2vh;
    color:#fbfbf3ff;
    `