import React from "react";
import { SizeType } from "../../../../typing/SizeType";
import styled from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";

interface Props {
  size: SizeType;
}

const SmTabletWhiteBG = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  @media (max-width: ${sm_breakpoint}px) {
    height: 300px;
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    height: 450px;
  }
`;

const PCWhiteBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  clip-path: polygon(0 0, 50% 0, 35% 100%, 0 100%);
`;

const WhiteBG: React.FC<Props> = ({ size }: Props) => {
  return size === "pc" ? <PCWhiteBG /> : <SmTabletWhiteBG />;
};

export default WhiteBG;
