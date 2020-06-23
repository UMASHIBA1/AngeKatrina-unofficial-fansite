import React from "react";
import LogoImg from "../../../public/svgs/home/logo.svg";
import styled from "styled-components";

const Wrapper = styled.span`
  width: 300px;
  margin: 10px 0 0 10px;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg />
    </Wrapper>
  );
};

export default Logo;
