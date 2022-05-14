import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";
import { backgroundAnimation } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

const animateBackgroundWidth = 4500;

const wrapperWidth = `calc(${animateBackgroundWidth}vh + 100vw)`;

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${wrapperWidth};
  height: 100%;
  overflow: visible;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: wrapperWidth, y: 0 })}
        ${backgroundAnimation.duration_ms}ms linear
        ${backgroundAnimation.delay_ms}ms both;
    `}
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const AnimateHalfBackground = styled.div<{ position: "up" | "down" }>`
  position: absolute;
  right: 100vw;
  ${({ position }) =>
    position === "up" &&
    css`
      bottom: 50vh;
      border-bottom-left-radius: ${animateBackgroundWidth}vh 150vh;
    `}
  ${({ position }) =>
    position === "down" &&
    css`
      top: 50vh;
      border-top-left-radius: ${animateBackgroundWidth}vh 150vh;
    `}
  width: max(${animateBackgroundWidth / 3}vh, 100vw);
  height: 50vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const BackgroundAnimation: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <BackGround />
      <AnimateHalfBackground position="up" />
      <AnimateHalfBackground position="down" />
    </Wrapper>
  );
};

export default BackgroundAnimation;
