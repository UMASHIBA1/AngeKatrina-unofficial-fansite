import React from "react";
import styled, { css } from "styled-components";
import { tablet_breakpoint } from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { scale } from "../../../../styles/commonAnimation";

interface Props {
  color: "red" | "white";
  place: "topRight" | "bottomLeft";
  isStartAnimation: boolean;
  animationOrder: "first" | "second";
}

const Circle = styled.div<Props>`
  position: absolute;
  ${({ place }) =>
    place === "topRight" &&
    css`
      top: min(-50vw, -50vh);
      right: min(-50vw, -50vh);
    `}
  ${({ place }) =>
    place === "bottomLeft" &&
    css`
      bottom: min(-50vw, -50vh);
      left: min(-50vw, -50vh);
    `}
	width: max(100vw, 100vh);
  height: max(100vw, 100vh);
  transform: scale(0);
  animation: ${({ isStartAnimation }) =>
      isStartAnimation ? scale(2.8) : "none"}
    ease-in forwards;
  animation-duration: 200ms;
  animation-delay: ${({ animationOrder }) =>
    animationOrder === "first" ? "100ms" : "300ms"};

  @media (min-width: ${tablet_breakpoint}px) {
    animation-duration: 250ms;
    animation-delay: ${({ animationOrder }) =>
      animationOrder === "first" ? "100ms" : "300ms"};
  }

  ${({ color }) =>
    color === "red" &&
    css`
      background-color: ${ANGE_LIVE_BACK_COLOR};
    `}
  ${({ color }) =>
    color === "white" &&
    css`
      background-color: ${ANGE_WHITE};
    `}

  border-radius: 50%;
`;

const ExpandCircle: React.FC<Props> = (props) => {
  return <Circle {...props} />;
};

export default ExpandCircle;
