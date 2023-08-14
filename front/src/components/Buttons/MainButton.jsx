import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const MyButtonStyled = styled.button`
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
`

const MyButton = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <MyButtonStyled onClick={handleClick}>{text}</MyButtonStyled>
  )
}

export default MyButton;