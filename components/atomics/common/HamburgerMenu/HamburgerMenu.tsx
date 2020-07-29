import React from "react";
import styled from "styled-components";
import { ANGE_WHITE, ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";

interface Props {
  onClickFC?: () => void;
}

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${ANGE_WHITE};
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  width: 45px;
  height: 45px;
  top: 8px;
  right: 8px;

  @media (min-width: ${sm_breakpoint}px) {
    width: 70px;
    height: 70px;
    top: 12px;
    right: 12px;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    width: 80px;
    height: 80px;
    top: 16px;
    right: 16px;
  }
`;

const Line = styled.div`
  display: flex;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 65%;
  height: 4px;
  margin: 3px 0 3px 0;
  border-radius: 2px;
  @media (min-width: ${sm_breakpoint}px) {
    width: 60%;
    height: 6px;
    margin: 4px 0 4px 0;
    border-radius: 3px;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    height: 8px;
    margin: 4px 0 4px 0;
    border-radius: 4px;
  }
`;

const HamburgerMenu: React.FC<Props> = (props: Props) => {
  return (
    <Circle onClick={props.onClickFC} data-testid="hamburger-menu">
      <Line />
      <Line />
      <Line />
    </Circle>
  );
};

export default HamburgerMenu;
