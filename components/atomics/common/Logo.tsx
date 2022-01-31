import React from "react";
import WhiteLogoImg from "../../../public/svgs/home/logo.svg";
import RedLogoImg from "../../../public/svgs/home/red-logo.svg";
import styled from "styled-components";
import { sm_breakpoint } from "../../../constants/breakpoints";

const Wrapper = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  width: 150px;
  max-height: 100px;
  @media (min-width: ${sm_breakpoint}px) {
    width: 300px;
  }
`;

interface Props {
  bgColor: "red" | "white";
}

const Logo: React.VFC<Props> = ({ bgColor = "white" }) => {
  const LogoImg = bgColor === "white" ? WhiteLogoImg : RedLogoImg;

  return (
    <Wrapper>
      <LogoImg />
    </Wrapper>
  );
};

export default Logo;
