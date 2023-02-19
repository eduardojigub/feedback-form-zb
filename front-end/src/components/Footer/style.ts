import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 15%;
  width: 100%;
  background-color: #e5e5e5;
  border: 1px solid #d8d8d8;
`;


export const ContainerIcons = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;