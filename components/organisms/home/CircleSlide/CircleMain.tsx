import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";

const smDiameter = "90vw";
const tabletDiameter = "70vw";
const pcDiameter = "70vh";

const redBorderWidth = 4;

const Outline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${ANGE_WHITE};
  overflow: hidden;
  width: calc(${smDiameter} + ${redBorderWidth + 2}px);
  height: calc(${smDiameter} + ${redBorderWidth + 2}px);
  @media (min-width: ${sm_breakpoint}px) {
    width: calc(${tabletDiameter} + ${redBorderWidth + 2}px);
    height: calc(${tabletDiameter} + ${redBorderWidth + 2}px);
  }

  @media (min-width: ${tablet_breakpoint}px) {
    width: calc(${pcDiameter} + ${redBorderWidth + 2}px);
    height: calc(${pcDiameter} + ${redBorderWidth + 2}px);
  }
`;

const StyledCircleMain = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${ANGE_WHITE};
  border: solid ${redBorderWidth}px ${ANGE_LIVE_BACK_COLOR};
  width: ${smDiameter};
  height: ${smDiameter};
  overflow: hidden;
  z-index: 1;

  @media (min-width: ${sm_breakpoint}px) {
    width: ${tabletDiameter};
    height: ${tabletDiameter};
  }

  @media (min-width: ${tablet_breakpoint}px) {
    width: ${pcDiameter};
    height: ${pcDiameter};
  }
`;

const CircleMain: React.FC = (props) => {
  return (
    <Outline>
      <StyledCircleMain>{props.children}</StyledCircleMain>
    </Outline>
  );
};

export default CircleMain;
