import React from "react";
import { RiLinkedinFill, RiFacebookLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { StyledFooter, ContainerIcons } from "./styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
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
