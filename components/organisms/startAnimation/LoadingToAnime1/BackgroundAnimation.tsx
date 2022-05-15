import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { backgroundAnimation } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

const openerAnimation = keyframes`
  0% {
    transform: scale(0,0);
  }

  10% {
    transform: scale(0.5, 0.1);
  }

  40%,45% {
    transform: scale(0.1, 0.1);
  }

  60%,65% {
    transform: scale(0.1, 1);
  }

  100% {
    transform: scale(1,1);
  }

`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const VerticalOpener = styled.div<{ isStartAnimation: boolean; index: number }>`
  position: relative;
  top: -24px;
  left: 0;
  width: 10%;
  height: 130%;
  background-color: ${ANGE_WHITE};
  border-radius: 50vw;
  transform: scale(0);
  ${({ isStartAnimation, index }) =>
    isStartAnimation &&
    css`
      animation: ${openerAnimation} ${backgroundAnimation.duration_ms}ms
        ease-out ${backgroundAnimation.delay_ms + 60 * index}ms forwards;
    `}
`;

const BackgroundAnimation: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper>
      {[...Array(10).keys()].map((i) => (
        <VerticalOpener key={i} isStartAnimation={isStartAnimation} index={i} />
      ))}
    </Wrapper>
  );
};

export default BackgroundAnimation;
