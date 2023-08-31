import styled from 'styled-components';

export const TittleForm = styled.h1`
font-size: 35px;
margin: 0;
padding: 0;
`

export const ProductFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 40%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

 
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
