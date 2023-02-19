import React from "react";
import { RiLinkedinFill, RiFacebookLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import {
  StyledFooter,
  ContainerIcons,
  AssetPinkImage,
  AssetGreenImage,
  AssetYellowImage,
} from "./styles";
import PinkFooter from "../../assets/PinkFooter.svg";
import GreenCircle from "../../assets/GreenCircle.svg";
import YellowCircle from "../../assets/YellowFooter.svg";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <AssetPinkImage src={PinkFooter} />
      <AssetGreenImage src={GreenCircle} />
      <AssetYellowImage src={YellowCircle} />
      <ContainerIcons>
        <RiLinkedinFill />
        <RiFacebookLine />
        <AiOutlineTwitter />
        <FaPinterestP />
      </ContainerIcons>
    </StyledFooter>
  );
};

export default Footer;
