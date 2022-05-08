import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_YELLOW } from "../../../../constants/colors";

type animationKind = "loading" | "disappear";

const rotateSquare = keyframes`
    0% {
        transform: rotate(0);
    }

    45%, 55% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(90deg);
    }
`;

const squareColorChange = keyframes`
    0% {
        background-color: ${ANGE_YELLOW};
    }

    25%,75% {
        background-color: ${ANGE_BLACK};
    }

    76%, 100% {
        background-color: ${ANGE_YELLOW};
    }
`;

const toCenter = (toX: string) => keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }

  100% {
    transform: translateX(${toX}) rotate(2turn);
  }
`;

const Square = styled.div<{ animationKind: animationKind; delayMs: number }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${ANGE_YELLOW};
  ${({ animationKind, delayMs }) =>
    animationKind === "loading" &&
    css`
      animation: ${rotateSquare} 600ms ease-in-out both ${delayMs}ms,
        ${squareColorChange} 600ms forwards ${delayMs}ms;
    `}
  ${({ animationKind, delayMs }) =>
    animationKind === "disappear" &&
    css`
      animation: ${rotateSquare} 600ms ease-in-out both ${delayMs}ms,
        ${squareColorChange} 600ms forwards ${delayMs}ms;

      :nth-child(1) {
        transform-origin: 52px 0;
        animation: ${toCenter("52px")} 400ms ease-out 1200ms both;
      }

      :nth-child(3) {
        transform-origin: -52px 0;
        animation: ${toCenter("-52px")} 400ms ease-out 1200ms both;
      }
    `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const useAnimation = () => {
  const [animationKind, changeAnimationKind] = useState<animationKind>(
    "loading"
  );

  const toNextAnimation = () => {
    changeAnimationKind("disappear");
  };

  return [animationKind, toNextAnimation] as [
    animationKind,
    typeof toNextAnimation
  ];
};

const ThreeSquares: React.VFC = () => {
  const [animationKind, toNextAnimation] = useAnimation();

  return (
    <Wrapper>
      <Square animationKind={animationKind} delayMs={200} />
      <Square animationKind={animationKind} delayMs={600} />
      <Square
        animationKind={animationKind}
        delayMs={1000}
        onAnimationEnd={toNextAnimation}
      />
    </Wrapper>
  );
};

export default ThreeSquares;
