import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_YELLOW,
  ANGE_WHITE,
} from "../../../../constants/colors";
import { scale } from "../../../../styles/commonAnimation";
import { RedBlackYellow } from "../../../../typing/Color";

interface Props {
  children?: ReactNode;
}

const Circle = styled.div<{
  color: RedBlackYellow | typeof ANGE_LIVE_BACK_COLOR | typeof ANGE_WHITE;
  delayMs: number;
  firstScale?: number;
  position: "left" | "center" | "right";
}>`
  position: absolute;
  ${({ position }) =>
    position === "left" &&
    css`
      top: calc(50% - 85px);
      left: calc(50% - 275px);
    `}
  ${({ position }) =>
    position === "center" &&
    css`
      top: calc(50% - 85px);
      left: calc(50% - 85px);
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      top: calc(50% - 85px);
      left: calc(50% + 105px);
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  transform: scale(${({ firstScale = 0 }) => firstScale});
  ${({ delayMs }) => css`
    animation: ${scale(14)} 300ms ease-out ${delayMs}ms forwards;
  `}
`;

const ExpandCircle: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Circle
        color={ANGE_LIVE_BACK_COLOR}
        position="center"
        firstScale={1}
        delayMs={0}
      />
      <Circle color={ANGE_BLACK} position="left" delayMs={100} />
      <Circle color={ANGE_YELLOW} position="right" delayMs={200} />
      <Circle color={ANGE_WHITE} position="center" delayMs={300}>
        {children}
      </Circle>
    </>
  );
};

export default ExpandCircle;
