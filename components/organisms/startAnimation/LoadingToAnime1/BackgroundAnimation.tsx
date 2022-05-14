import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";
import { backgroundAnimation } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

type position = "up" | "down";

const openVerticalAnimation = (position: position) => keyframes`
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(${position === "up" ? "-60vh" : "60vh"});
  }
`;

const wrapperWidth = "300vw";

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
        ${backgroundAnimation.duration_ms}ms ease-out
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

const animateBackgroundWidth = 200;

const AnimateHalfBackground = styled.div<{
  isStartAnimation: boolean;
  position: position;
}>`
  position: absolute;
  right: 100vw;
  ${({ position }) =>
    position === "up" &&
    css`
      bottom: 50vh;
      border-bottom-left-radius: ${animateBackgroundWidth}vw 30vh;
    `}
  ${({ position }) =>
    position === "down" &&
    css`
      top: 50vh;
      border-top-left-radius: ${animateBackgroundWidth}vw 30vh;
    `}
  width: 200vw;
  height: 50vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  ${({ isStartAnimation, position }) =>
    isStartAnimation &&
    position === "up" &&
    css`
      animation: ${openVerticalAnimation("up")}
        ${backgroundAnimation.duration_ms}ms ease-out
        ${backgroundAnimation.delay_ms}ms both;
    `}

  ${({ isStartAnimation, position }) =>
    isStartAnimation &&
    position === "down" &&
    css`
      animation: ${openVerticalAnimation("down")}
        ${backgroundAnimation.duration_ms}ms ease-out
        ${backgroundAnimation.delay_ms}ms both;
    `}
`;

const BackgroundAnimation: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <BackGround />
      <AnimateHalfBackground
        isStartAnimation={isStartAnimation}
        position="up"
      />
      <AnimateHalfBackground
        isStartAnimation={isStartAnimation}
        position="down"
      />
    </Wrapper>
  );
};

export default BackgroundAnimation;
