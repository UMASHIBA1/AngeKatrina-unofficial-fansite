import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { leftRotate } from "../../../../styles/commonAnimation";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  top: -100%;
  left: -100%;
  display: flex;
  flex-direction: row;
  width: 300%;
  height: 300%;
  transform: rotate(45deg);
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${leftRotate("45deg", "315deg")} 400ms ease-in-out 400ms both;
    `}
  transform-origin: center;
`;

const inScreenAnimation = (position: "left" | "right", stopPercent: number) => {
  const prefix = position === "left" ? "-" : "";

  return keyframes`

    0% {
        transform: translateX(${prefix}160%);
    }

    100% {
        transform: translateX(${prefix}${stopPercent}%);
    }
`;
};

const closingAnimation = (position: "left" | "right", stopPercent: number) => {
  const prefix = position === "left" ? "-" : "";
  return keyframes`
        0% {
            transform: translateX(${prefix}${stopPercent}%);
        }

        100% {
            transform: translateX(0);
        }
    `;
};

const RedCloser = styled.div<{
  position: "left" | "right";
  animationKind: "inScreen" | "closing";
}>`
  width: 50%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  ${({ animationKind, position }) =>
    animationKind === "inScreen" &&
    css`
      animation: ${inScreenAnimation(position, 50)} 600ms
        cubic-bezier(0.1, 0.46, 0.22, 1) 2000ms both;

      @media (min-width: ${sm_breakpoint}px) {
        animation: ${inScreenAnimation(position, 30)} 600ms
          cubic-bezier(0.1, 0.46, 0.22, 1) 2000ms both;
      }

      @media (min-width: ${tablet_breakpoint}px) {
        animation: ${inScreenAnimation(position, 25)} 600ms
          cubic-bezier(0.1, 0.46, 0.22, 1) 2000ms both;
      }
    `}
  ${({ animationKind, position }) =>
    animationKind === "closing" &&
    css`
      animation: ${closingAnimation(position, 50)} 400ms ease-in-out 400ms both;

      @media (min-width: ${sm_breakpoint}px) {
        animation: ${closingAnimation(position, 30)} 400ms ease-in-out 400ms
          both;
      }

      @media (min-width: ${tablet_breakpoint}px) {
        animation: ${closingAnimation(position, 25)} 400ms ease-in-out 400ms
          both;
      }
    `}
`;

const useAnimation = () => {
  const [animationkind, changeAnimationKind] = useState<"inScreen" | "closing">(
    "inScreen"
  );
  const toNextAnimation = () => {
    changeAnimationKind("closing");
  };

  return [animationkind, toNextAnimation] as [
    typeof animationkind,
    typeof toNextAnimation
  ];
};

const CloseAnime2: React.VFC = () => {
  const [animationKind, toNextAnimation] = useAnimation();

  return (
    <Wrapper isStartAnimation={animationKind === "closing"}>
      <RedCloser
        position="left"
        animationKind={animationKind}
        onAnimationEnd={toNextAnimation}
      />
      <RedCloser position="right" animationKind={animationKind} />
    </Wrapper>
  );
};

export default CloseAnime2;
