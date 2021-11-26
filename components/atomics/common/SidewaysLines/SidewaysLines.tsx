import React from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import { fadein, translate } from "../../../../styles/commonAnimation";
import { RedBlackYellow } from "../../../../typing/Color";

export interface SidewaysLinesProps {
  animation: "none" | "slideFadein";
  pattern: "leftRightCenter" | "rightCenterLeft" | "centerLeftRight";
  animationDelayMs?: number;
  width?: string;
}

const Line = styled.div<{
  color: RedBlackYellow;
  animation: SidewaysLinesProps["animation"];
  animationDelayMs: SidewaysLinesProps["animationDelayMs"];
}>`
  min-height: 12px;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ color }) => color};
  margin: 6px;
  ${({ animation, animationDelayMs }) =>
    animation === "slideFadein" &&
    css`
      animation: ${fadein()} 800ms ease-in-out ${animationDelayMs}ms both,
        ${translate({ x: "-50%", y: 0 }, { x: 0, y: 0 })} 1000ms ease-out
          ${animationDelayMs}ms both;
    `}
`;

const Wrapper = styled.div<SidewaysLinesProps>`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ width }) => css`
    width: ${width};
  `}}

  > ${Line} {
    position: relative;
    ${({ pattern }) =>
      pattern === "rightCenterLeft" &&
      css`
        :nth-child(1) {
          top: 0;
          right: -24%;
        }

        :nth-child(2) {
          top: 0;
          left: 0;
        }

        :nth-child(3) {
          top: 0;
          left: -24%;
        }
      `}

    ${({ pattern }) =>
      pattern === "leftRightCenter" &&
      css`
        :nth-child(1) {
          top: 0;
          left: -24%;
        }

        :nth-child(2) {
          top: 0;
          right: -24%;
        }

        :nth-child(3) {
          top: 0;
          left: 0;
        }
      `}

    ${({ pattern }) =>
      pattern === "centerLeftRight" &&
      css`
        :nth-child(1) {
          top: 0;
          left: 0;
        }

        :nth-child(2) {
          top: 0;
          left: -28%;
        }

        :nth-child(3) {
          top: 0;
          right: -24%;
        }
      `}
  }
`;

const SidewaysLines: React.FC<SidewaysLinesProps> = ({
  animation,
  pattern,
  animationDelayMs = 100,
  width = "200px",
}) => {
  const firstLineDelay =
    pattern === "centerLeftRight"
      ? 100
      : pattern === "leftRightCenter"
      ? 200
      : 0;
  const secondLineDelay =
    pattern === "centerLeftRight"
      ? 200
      : pattern === "leftRightCenter"
      ? 0
      : 100;
  const thirdLineDelay =
    pattern === "centerLeftRight"
      ? 0
      : pattern === "leftRightCenter"
      ? 100
      : 200;
  return (
    <Wrapper animation={animation} pattern={pattern} width={width}>
      <Line
        color={ANGE_RED}
        animation={animation}
        animationDelayMs={animationDelayMs + firstLineDelay}
      />
      <Line
        color={ANGE_YELLOW}
        animation={animation}
        animationDelayMs={animationDelayMs + secondLineDelay}
      />
      <Line
        color={ANGE_BLACK}
        animation={animation}
        animationDelayMs={animationDelayMs + thirdLineDelay}
      />
    </Wrapper>
  );
};

export default SidewaysLines;
