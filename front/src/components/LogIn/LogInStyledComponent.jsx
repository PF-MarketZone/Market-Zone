import styled from "styled-components";

export const StyledForm = styled.form``;

export const Input = styled(({ value, ...rest }) => <input {...rest} />)`
  color: ${(props) => (props.value === "" ? "#777676" : "#1d1e18")};
  background-color: ${(props) => (props.error ? "#f17f7f79" : "#fbfbf2")};
  border: solid 1px #4e4e4e;
  border-radius: 5px;
  width: 100%;
  padding: 1px 0px;
  padding-left: 4px;
  margin: 6px 0px;
  height: 5vh;
`;

export const P = styled(({ error, ...rest }) => <p {...rest} />)`
  display: ${(props) => (props.error ? "block" : "none")};
  color: red;
  position: absolute;
  width: 30%;
`;

export const H3 = styled.h3`
  margin: 1px 0 25px 0;
  font-size: 20px;
  font-weight: 500;
  color: #fbfbf2;
`;
export const H3O = styled.h3`
  margin: 15px 0;
  color: #fbfbf2;
`;
export const H5 = styled.h5`
  margin: 6px 0 0 0;
  font-size: 16px;
  font-weight: 300;
  color: #fbfbf2;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DivPrincipal = styled.div`
  background-color: #1d1e18;
  width: 30%;
  border: 1px solid #8b3dff;
  border-radius: 20px;
  padding: 5vh;
  height: 30%;
`;
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const DivPrincipalReset = styled.div`
background-color: #1d1e18;
width: 100%;
height: 50vh; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box; 
border: 1px solid #8b3dff;
border-radius: 20px;
padding: 5vh;
`;