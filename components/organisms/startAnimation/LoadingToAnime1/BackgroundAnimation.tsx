import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { backgroundAnimation } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

const whiteBG = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(5);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200vw;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const WhiteBG = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  top: 0;
  left: calc(100vw - 50vh);
  width: 100vh;
  height: 100vh;
  background-color: ${ANGE_WHITE};
  border-radius: 50vh;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${whiteBG} ${backgroundAnimation.duration_ms}ms
        cubic-bezier(0.36, 0.64, 0.46, 1) ${backgroundAnimation.delay_ms}ms both;
    `}
`;

const BackgroundAnimation: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper>
      <WhiteBG isStartAnimation={isStartAnimation}></WhiteBG>
    </Wrapper>
  );
};

export default BackgroundAnimation;
