import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../../constants/colors";
import {
  fadein,
  fadeout,
  leftRotate,
  rightRotate,
} from "../../../../../../styles/commonAnimation";
import { startAnimationBaseDelayMs } from "./animationBaseDelay";

interface Props {
  diameter: number;
  runStartAnimation: boolean;
  leftOrRightRotate: "left" | "right";
  animationDelayMs?: number;
  startRotateDeg?: number;
}

const Wrapper = styled.div<Required<Omit<Props, "startRotateDeg">>>`
  position: absolute;
  top: calc(50% - ${({ diameter }) => diameter / 2}px);
  left: calc(50% - ${({ diameter }) => diameter / 2}px);
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  ${({
    animationDelayMs: animationDelay,
    leftOrRightRotate,
    runStartAnimation,
  }) =>
    runStartAnimation &&
    css`
      animation: ${fadein()} 400ms ease-out
          ${startAnimationBaseDelayMs + animationDelay}ms both,
        ${leftOrRightRotate === "left" ? leftRotate() : rightRotate()} 1000ms
          both cubic-bezier(0.33, 1, 0.68, 1)
          ${startAnimationBaseDelayMs + animationDelay}ms,
        ${fadeout} 400ms forwards ease-out
          ${startAnimationBaseDelayMs + animationDelay + 600}ms;
    `}
`;

const BorderLine = styled.div<Required<Pick<Props, "startRotateDeg">>>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid ${ANGE_LIVE_BACK_COLOR};
  clip-path: polygon(50% 50%, 15% 100%, 85% 100%);
  box-sizing: border-box;
  ${({ startRotateDeg }) => css`
    transform: rotate(${startRotateDeg}deg);
  `}
`;

const OutsideRotateLine: React.VFC<Props> = ({
  startRotateDeg = 0,
  animationDelayMs: animationDelay = 0,
  ...props
}) => {
  return (
    <Wrapper {...props} animationDelayMs={animationDelay}>
      <BorderLine startRotateDeg={startRotateDeg} />
    </Wrapper>
  );
};

export default OutsideRotateLine;
