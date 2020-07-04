import React from "react";
import LogoImg from "../../../public/svgs/home/logo.svg";
import styled from "styled-components";
import { sm_breakpoint } from "../../../constants/breakpoints";

const Wrapper = styled.span`
  width: 150px;
  margin: 10px 0 0 10px;
  @media (min-width: ${sm_breakpoint}px) {
    width: 300px;
  }
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg />
    </Wrapper>
  );
};

export default Logo;
