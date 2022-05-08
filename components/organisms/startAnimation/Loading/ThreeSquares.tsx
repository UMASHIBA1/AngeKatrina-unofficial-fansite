import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_YELLOW } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";
import AnimationProps from "../../../../typing/AnimationProps";

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

const rotateAndExpand = keyframes`
  0% {
    transform: rotate(0) scale(1);
  }

  20% {
    transform: rotate(0.2turn) scale(1.2);
  }

  100% {
    transform: rotate(1turn) scale(1);
  }
`;

const disappearAnimationProps: AnimationProps = {
  delay_ms: 200,
  duration_ms: 600,
};

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
  ${({ animationKind }) =>
    animationKind === "disappear" &&
    css`
      :nth-child(1) {
        transform-origin: 52px 0;
        animation: ${translate({ x: 0, y: 0 }, { x: "52px", y: 0 })}
          ${disappearAnimationProps.duration_ms}ms ease-out
          ${disappearAnimationProps.delay_ms}ms both;
      }

      :nth-child(2) {
        transform-origin: -52px 0;
        animation: ${translate({ x: 0, y: 0 }, { x: "-52px", y: 0 })}
          ${disappearAnimationProps.duration_ms}ms ease-out
          ${disappearAnimationProps.delay_ms}ms both;
      }
    `}
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 132px;
  height: 32px;
`;

const CenterSquareWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftRightSquareWrapper = styled.div<{
  isStartDisappearAnimation: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 72px;

  ${({ isStartDisappearAnimation }) =>
    isStartDisappearAnimation &&
    css`
      animation: ${rotateAndExpand} ${disappearAnimationProps.duration_ms}ms
        ease-out ${disappearAnimationProps.delay_ms}ms both;
    `}
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
      <CenterSquareWrapper>
        <Square animationKind={"loading"} delayMs={600} />
      </CenterSquareWrapper>
      <LeftRightSquareWrapper
        isStartDisappearAnimation={animationKind === "disappear"}
      >
        <Square animationKind={animationKind} delayMs={200} />
        <Square
          animationKind={animationKind}
          delayMs={1000}
          onAnimationEnd={toNextAnimation}
        />
      </LeftRightSquareWrapper>
    </Wrapper>
  );
};

export default ThreeSquares;
