import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";
import { backgroundAnimation } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  top: 0;
  left: -100vw;
  width: 200vw;
  height: 100%;
  overflow: hidden;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "100vw", y: 0 })}
        ${backgroundAnimation.duration_ms}ms linear
        ${backgroundAnimation.delay_ms}ms both;
    `}
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const AnimateHalfBackground = styled.div<{ position: "up" | "down" }>`
  position: absolute;
  left: 0;
  ${({ position }) =>
    position === "up" &&
    css`
      bottom: 50vh;
      border-bottom-left-radius: 150vw 50vh;
    `}
  ${({ position }) =>
    position === "down" &&
    css`
      top: 50vh;
      border-top-left-radius: 150vw 50vh;
    `}
  width: 100vw;
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
