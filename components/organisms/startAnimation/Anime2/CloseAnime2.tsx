import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";

const Wrapper = styled.div`
  position: absolute;
  top: -25%;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150%;
  transform: rotate(45deg);
`;

const inScreenAnimation = (position: "left" | "right") => {
  const prefix = position === "left" ? "-" : "";

  return keyframes`

    100% {
        transform: translateX(${prefix}100%);
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
  ${({ position }) =>
    position === "left" &&
    css`
      transform: translateX(-160%);
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      transform: translateX(160%);
    `}
    ${({ animationKind, position }) =>
    animationKind === "inScreen" &&
    css`
      animation: ${inScreenAnimation(position)} 600ms
        cubic-bezier(0.1, 0.46, 0.22, 1.05) 2000ms forwards;
    `}
`;

const CloseAnime2: React.VFC = () => {
  return (
    <Wrapper>
      <RedCloser position="left" animationKind="inScreen" />
      <RedCloser position="right" animationKind="inScreen" />
    </Wrapper>
  );
};

export default CloseAnime2;
