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
  background-color: #f9f9f9;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const FormTextarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;