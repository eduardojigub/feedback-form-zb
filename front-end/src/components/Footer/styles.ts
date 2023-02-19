import styled from 'styled-components';

interface AssetImageProps {
  src: string;
}

export const AssetPinkImage = styled.div<AssetImageProps>`
  position: absolute;
  width: 12%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const AssetYellowImage = styled.div<AssetImageProps>`
  position: absolute;
  width: 8%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  right: 0;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const AssetGreenImage = styled.div<AssetImageProps>`
  position: absolute;
  right: calc(14% - 60px);
  width: 5%;
  height: 80%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 15%;
  position: fixed;
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