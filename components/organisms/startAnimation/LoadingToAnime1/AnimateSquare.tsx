import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_YELLOW } from "../../../../constants/colors";
import {
  squareMoveToLeft,
  squareMoveToRight,
  squareOpenAnime1,
} from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

type animationPhase = "none" | "moveToRight" | "moveToLeft" | "openAnime1";

const moveToRight = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }

  100% {
    transform: translateX(64px) scale(0.7) rotate(45deg);
  }
`;

const moveToLeft = (positionX: string, scale: number) => keyframes`
    0% {
        transform: translateX(64px) scale(0.7);
    }

    100% {
        transform: translateX(${positionX}) scale(${scale}) rotate(-45deg);
    }
`;

const smpMoveToLeft = moveToLeft("calc(-50vw + 42px)", 2);

const tabletMoveToLeft = moveToLeft("calc(-50vw + 42px)", 2);

const pcMoveToLeft = moveToLeft("calc(-50vw + 58px)", 2);

const openAnime1Move = (startPositionX: string, scale: number) => keyframes`
  0% {
    transform: translateX(${startPositionX}) scale(${scale}) rotate(-45deg);
  }

  100% {
    transform: translateX(calc(50vw + 58px)) scale(0.6) rotate(180deg);
  }
`;

const smpOpenAnime1 = openAnime1Move("calc(-50vw + 42px)", 2);
const tabletOpenAnime1 = openAnime1Move("calc(-50vw + 42px)", 2);
const pcOpenAnime1 = openAnime1Move("calc(-50vw + 58px)", 2);

const Square = styled.div<{ animationPhase: animationPhase }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${ANGE_YELLOW};
  ${({ animationPhase }) =>
    animationPhase === "moveToRight" &&
    css`
      animation: ${moveToRight} ${squareMoveToRight.duration_ms}ms
        cubic-bezier(0.36, 0.64, 0.46, 1) ${squareMoveToRight.delay_ms}ms both;
    `}
  ${({ animationPhase }) =>
    animationPhase === "moveToLeft" &&
    css`
      animation: ${smpMoveToLeft} ${squareMoveToLeft.duration_ms}ms
        cubic-bezier(0.36, 0.64, 0.46, 1) ${squareMoveToLeft.delay_ms}ms both;
      @media (min-width: ${sm_breakpoint}px) {
        animation: ${tabletMoveToLeft} ${squareMoveToLeft.duration_ms}ms
          cubic-bezier(0.36, 0.64, 0.46, 1) ${squareMoveToLeft.delay_ms}ms both;
      }
      @media (min-width: ${tablet_breakpoint}px) {
        animation: ${pcMoveToLeft} ${squareMoveToLeft.duration_ms}ms
          cubic-bezier(0.36, 0.64, 0.46, 1) ${squareMoveToLeft.delay_ms}ms both;
      }
    `}

    ${({ animationPhase }) =>
    animationPhase === "openAnime1" &&
    css`
      animation: ${smpOpenAnime1} ${squareOpenAnime1.duration_ms}ms
        cubic-bezier(0.36, 0.64, 0.46, 1) ${squareOpenAnime1.delay_ms}ms both;
      @media (min-width: ${sm_breakpoint}px) {
        animation: ${tabletOpenAnime1} ${squareOpenAnime1.duration_ms}ms
          cubic-bezier(0.36, 0.64, 0.46, 1) ${squareOpenAnime1.delay_ms}ms both;
      }
      @media (min-width: ${tablet_breakpoint}px) {
        animation: ${pcOpenAnime1} ${squareOpenAnime1.duration_ms}ms
          cubic-bezier(0.36, 0.64, 0.46, 1) ${squareOpenAnime1.delay_ms}ms both;
      }
    `}
`;

const useAnimation = (isStartAnimation: boolean) => {
  const [animationPhase, changeAnimation] = useState<animationPhase>("none");

  const internalToNextAnimation = () => {
    switch (animationPhase) {
      case "none":
        changeAnimation("moveToRight");
        break;
      case "moveToRight":
        changeAnimation("moveToLeft");
        break;
      case "moveToLeft":
        changeAnimation("openAnime1");
        break;
      case "openAnime1":
        // TODO: 引数のtoNextAnimationを実行する
        break;
    }
  };

  useEffect(() => {
    if (isStartAnimation && animationPhase === "none") {
      internalToNextAnimation();
    }
  }, [isStartAnimation]);

  return [animationPhase, internalToNextAnimation] as [
    animationPhase,
    typeof internalToNextAnimation
  ];
};

const AnimateSquare: React.VFC<Props> = ({ isStartAnimation }) => {
  const [animationPhase, internalToNextAnimation] = useAnimation(
    isStartAnimation
  );
  return (
    <Square
      onAnimationEnd={internalToNextAnimation}
      animationPhase={animationPhase}
    />
  );
};

export default AnimateSquare;
