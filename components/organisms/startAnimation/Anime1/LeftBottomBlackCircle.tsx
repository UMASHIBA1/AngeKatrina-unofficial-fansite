import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK } from "../../../../constants/colors";

interface Props {
  isStartAnimation: boolean;
}

const blackCircleAnimation = keyframes`
    0% {
        transform: translateY(calc(max(20vh, 30vw))) scale(0.2);
    }

    40%,60% {
        transform: translateY(-120px) scale(0.2);
    }

    80%,90% {
        transform: translateY(40px) scale(0.2);
    }

    95% {
        transform: translateY(-10px) scale(1);
    }

    100% {
        transform: translateY(0) scale(1);
    }
`;

const BlackCircle = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  left: 84px;
  bottom: 64px;
  width: min(20vh, 30vw);
  height: min(20vh, 30vw);
  background-color: ${ANGE_BLACK};
  border-radius: 50%;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${blackCircleAnimation} 800ms ease-in-out 100ms forwards;
    `}
`;

const LeftBottomBlackCircle: React.VFC<Props> = ({ isStartAnimation }) => {
  return <BlackCircle isStartAnimation={isStartAnimation} />;
};

export default LeftBottomBlackCircle;
