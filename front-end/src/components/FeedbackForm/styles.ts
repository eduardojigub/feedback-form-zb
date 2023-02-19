import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #DCDCDC
`;

export const FormTextarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #DCDCDC;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
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