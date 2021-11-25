import React from "react";
import styled from "styled-components";
import { tablet_breakpoint } from "../../../../../constants/breakpoints";
import NavBarCrossMarks from "../NavBarCrossMarks";
import NavBarRings from "../NavBarRings";
import NavBarSidewaysLines from "../NavBarSidewaysLines";
import CenterCircle from "./CenterCircle/CenterCircle";
import ThreeSlashes from "./ThreeSlashes/ThreeSlashes";

interface Props {
  runStartAnimation: boolean;
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${tablet_breakpoint}px) {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: calc(100% - 360px);
    height: 100%;
  }
`;

const NavBarLeft: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper>
      <ThreeSlashes runStartAnimation={runStartAnimation} />
      <CenterCircle runStartAnimation={runStartAnimation} />
      <NavBarRings runStartAnimation={runStartAnimation} />
      <NavBarCrossMarks runStartAnimation={runStartAnimation} />
      <NavBarSidewaysLines runStartAnimation={runStartAnimation} />
    </Wrapper>
  );
};

export default NavBarLeft;
