import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Header = styled.h1`
    padding: 1em 0;
    text-align: center;
    color: #3E3E3E;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 10em;
  padding: 20px;
  border-radius: 5px;
  height: 350px;
`;

export const FormInput = styled.input`
padding: 10px;
border-radius: 10px;
width: 100%;
color: #2D2D2D;
font-size: 18px;
::placeholder {
  color: #2D2D2D;
  opacity: 1; /* Firefox */
}
`

export const FormTextarea = styled.textarea`
  margin: 10px 0;
  border: 1px solid #DCDCDC;  
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #2D2D2D;
  ::placeholder {
    color: #2D2D2D;
    opacity: 1; /* Firefox */
  }
  width: 100%;
  max-width: 100%;
  min-width: 60%;
  height: 150px;
  max-height: 200px;
  min-height: 150px;
  resize: none;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 20px 40px;
  border: none;
  border-radius: 50px;
  background-color: #FAD34F;
  color: #FFFF;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Apercu Arabic Pro'

  &:hover {
    background-color: #FAD35F;
  }
`;

export const ErrorLabel = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;