import React from "react";
import styled, { css } from "styled-components";
import { ANGE_RED } from "../../../../../constants/colors";
import { translate } from "../../../../../styles/commonAnimation";

interface Props {
  runCloseAnimation: boolean;
  onHideNavBarLeft: React.AnimationEventHandler<HTMLElement>;
}

const animationDuration = 400;

const Main = styled.div<Pick<Props, "runCloseAnimation">>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  :after {
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    content: "";
    background-color: ${ANGE_RED};
    ${({ runCloseAnimation }) =>
      runCloseAnimation &&
      css`
        animation: ${translate({ x: 0, y: 0 }, { x: "-200%", y: 0 })}
          ${animationDuration}ms ease-in-out both;
      `}
  }
`;

const OnHideEventTrigger = styled.div<Pick<Props, "runCloseAnimation">>`
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  visibility: hidden;
  ${({ runCloseAnimation }) =>
    runCloseAnimation &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "-100%", y: 0 })}
        ${animationDuration / 2}ms ease-in-out both;
    `}
`;

const CloseAnimation: React.VFC<Props> = ({
  runCloseAnimation,
  onHideNavBarLeft,
}) => {
  return (
    <Main runCloseAnimation={runCloseAnimation}>
      <OnHideEventTrigger
        runCloseAnimation={runCloseAnimation}
        onAnimationEnd={onHideNavBarLeft}
      />
    </Main>
  );
};

export default CloseAnimation;
