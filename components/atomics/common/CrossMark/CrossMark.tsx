import React from "react";
import styled, { css } from "styled-components";
import {
  boundExpandY,
  rightRotate,
  translate,
} from "../../../../styles/commonAnimation";
import { RedBlackYellow } from "../../../../typing/Color";

export interface CrossMarkProps {
  color: RedBlackYellow;
  animation: "none" | "expandRotate" | "slideLine";
  widthHeight?: string;
}

const Wrapper = styled.div<{
  animation: CrossMarkProps["animation"];
  widthHeight?: string;
}>`
  position: relative;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  ${({ widthHeight }) =>
    widthHeight &&
    css`
      width: ${widthHeight};
      height: ${widthHeight};
    `}
  margin: auto;

  ${({ animation }) =>
    animation === "expandRotate" &&
    css`
      animation: ${rightRotate()} 600ms ease-in-out both 100ms;
    `}
`;

const Line = styled.div<{
  color: RedBlackYellow;
  animation: CrossMarkProps["animation"];
  widthHeight?: string;
}>`
  position: absolute;
  top: 0;
  left: calc(50% - 12px);
  width: 24px;
  border-radius: 12px;
  height: 100%;
  background-color: ${({ color }) => color};
  transform-origin: center;

  :first-child {
    transform: rotate(-45deg);
  }

  :nth-child(2) {
    transform: rotate(45deg);
  }

  ${({ widthHeight }) =>
    widthHeight &&
    css`
      left: calc(50% - ${widthHeight} / 10);
      width: calc(${widthHeight} / 5);
      border-radius: calc(${widthHeight} / 10);
    `}

  ${({ color, animation, widthHeight }) =>
    animation === "expandRotate" &&
    css`
      background-color: transparent;
      ::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color};
        content: "";
        display: block;
        animation: ${boundExpandY(70, 1.2)} 600ms ease-in-out both 100ms;
        border-radius: ${widthHeight ? `calc(${widthHeight} / 10)` : `12px`};
      }
    `}

    ${({ color, animation, widthHeight }) =>
    animation === "slideLine" &&
    css`
      background-color: transparent;
      overflow: hidden;
      ::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color};
        content: "";
        display: block;
        animation: ${translate({ x: 0, y: "-100%" }, { x: 0, y: 0 })} 600ms
          ease-in-out both 100ms;
        border-radius: ${widthHeight ? `calc(${widthHeight} / 10)` : `12px`};
      }
    `}
`;

const CrossMark: React.FC<CrossMarkProps> = ({
  color,
  animation,
  widthHeight,
}) => {
  return (
    <Wrapper widthHeight={widthHeight} animation={animation}>
      <Line color={color} widthHeight={widthHeight} animation={animation} />
      <Line color={color} widthHeight={widthHeight} animation={animation} />
    </Wrapper>
  );
};

export default CrossMark;
