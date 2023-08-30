import { useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';


const ButtonBase = css`
  width: 100%;
  border: 2px solid black;
  background-color: #8b3dff;
  color: #000000ff;
  //padding: 1.5vw 0vw;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: black;
    color: #f6f8ff;
  }
`;

const PrimaryButton = styled.button`
  ${ButtonBase}
`;

const SecondaryButton = styled.button`
  ${ButtonBase}
  border: 2px solid #333333;
  color: #333333ff;
  &:hover {
    background-color: #333333;
    color: #f6f8ff;
  }
`;

const DangerButton = styled.button`
  ${ButtonBase}
  border: 2px solid red;
  color: red;
  &:hover {
    background-color: red;
    color: #f6f8ff;
  }
`;

const InitButton = styled.button`
  ${ButtonBase}
  border: 2px solid white;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const MyButton = ({ text, route, variant, icon, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick && !route) {
      onClick();
    }
    if (route && !onClick) {
      navigate(route);
    }

    // navigate(route);
  };

  const getButtonVariant = () => {
    switch (variant) {
      case 'secondary':
        return SecondaryButton;
        case 'danger':
          return DangerButton;
        case 'inicio':
          return InitButton;
        default:
        return PrimaryButton;
    }
  };

  const ButtonStyled = getButtonVariant();

  return (
    <ButtonStyled onClick={handleClick}><span>{icon}</span>{text}</ButtonStyled>
  )
}

export default MyButton;