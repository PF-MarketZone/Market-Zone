import { useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';

const ButtonBase = css`
  border: 2px solid black;
  background-color: transparent;
  color: #000000ff;
  padding: 1.5vw 6vw;
  border-radius: 5px;
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

const MyButton = ({ text, route, variant }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
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
    <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>
  )
}

export default MyButton;