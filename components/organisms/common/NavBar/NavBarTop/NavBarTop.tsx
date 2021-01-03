import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../constants/colors";
import { translate } from "../../../../../styles/commonAnimation";
import CloseButton from "../../../../atomics/common/CloseButton/CloseButton";
import NavBarTitle from "./NavBarTitle";

interface Props {
  runStartAnimation: boolean;
  onClose: () => void;
}

const baseDelay = 550;

const TopBar = styled.div<Pick<Props, "runStartAnimation">>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;

  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${({ runStartAnimation }) =>
        runStartAnimation
          ? translate({ x: "-100%", y: 0 }, { x: 0, y: 0 })
          : "none"}
      150ms ease-in-out both ${baseDelay + 50}ms;
  }
`;

const NavBarTop: React.FC<Props> = ({ onClose, runStartAnimation }) => {
  return (
    <TopBar runStartAnimation={runStartAnimation}>
      <NavBarTitle
        runStartAnimation={runStartAnimation}
        text="どれにする？"
        color={ANGE_LIVE_BACK_COLOR}
      />
      <CloseButton
        runStartAnimation={runStartAnimation}
        displayAnimationDelay={baseDelay + 300}
        onClickFC={onClose}
        right="10px"
      />
    </TopBar>
  );
};

export default NavBarTop;
