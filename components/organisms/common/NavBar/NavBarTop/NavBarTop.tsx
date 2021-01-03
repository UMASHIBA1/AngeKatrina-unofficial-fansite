import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../constants/colors";
import { translate } from "../../../../../styles/commonAnimation";
import CloseButton from "../../../../atomics/common/CloseButton/CloseButton";
import NavBarTitle from "./NavBarTitle";

interface Props {
  runStartAnimation: boolean;
  runCloseAnimation: boolean;
  onClose: () => void;
}

const baseDelay = 550;

const TopBar = styled.div<
  Pick<Props, "runStartAnimation" | "runCloseAnimation">
>`
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
    animation: 150ms ease-in-out both;
    ${({ runStartAnimation }) =>
      runStartAnimation &&
      css`
        animation-name: ${translate({ x: "-100%", y: 0 }, { x: 0, y: 0 })};
        animation-delay: ${baseDelay + 50}ms;
      `}
    ${({ runCloseAnimation }) =>
      runCloseAnimation &&
      css`
        animation-name: ${translate({ x: 0, y: 0 }, { x: "100%", y: 0 })};
        animation-delay: 200ms;
      `}
  }
`;

const NavBarTop: React.FC<Props> = ({
  onClose,
  runStartAnimation,
  runCloseAnimation,
}) => {
  return (
    <TopBar
      runStartAnimation={runStartAnimation}
      runCloseAnimation={runCloseAnimation}
    >
      <NavBarTitle
        runStartAnimation={runStartAnimation}
        runCloseAnimation={runCloseAnimation}
        text="どれにする？"
        color={ANGE_LIVE_BACK_COLOR}
      />
      <CloseButton
        runDisplayAnimation={runStartAnimation}
        runCloseAnimation={runCloseAnimation}
        disableAnimationDelay={100}
        displayAnimationDelay={baseDelay + 300}
        onClickFC={onClose}
        right="10px"
      />
    </TopBar>
  );
};

export default NavBarTop;
