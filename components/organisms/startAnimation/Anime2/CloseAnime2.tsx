import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";

const Wrapper = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  display: flex;
  flex-direction: row;
  width: 200%;
  height: 200%;
  transform: rotate(45deg);
`;

const inScreenAnimation = (position: "left" | "right") => {
  const prefix = position === "left" ? "-" : "";

  return keyframes`

    0% {
        transform: translateX(${prefix}160%);
    }

    100% {
        transform: translateX(${prefix}50%);
    }
`;
};

const closingAnimation = (position: "left" | "right") => {
  const prefix = position === "left" ? "-" : "";
  return keyframes`
        0% {
            transform: translateX(${prefix}50%);
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
      animation: ${inScreenAnimation(position)} 600ms
        cubic-bezier(0.1, 0.46, 0.22, 1) 2000ms both;
    `}
  ${({ animationKind, position }) =>
    animationKind === "closing" &&
    css`
      animation: ${closingAnimation(position)} 600ms ease-in-out 400ms both;
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
    <Wrapper>
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
