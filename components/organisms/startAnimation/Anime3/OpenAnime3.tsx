import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";

const Wrapper = styled.div`
  position: absolute;
  top: -100%;
  left: -100%;
  display: flex;
  flex-direction: row;
  width: 300%;
  height: 300%;
  transform: rotate(-36deg);
`;

const RedOpener = styled.div<{
  position: "left" | "right";
  animationKind: "open" | "expand";
}>`
  width: 50%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  ${({ position, animationKind }) =>
    position === "left" &&
    animationKind === "open" &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "-32px", y: 0 })} 400ms
        ease-in 400ms both;
    `}
  ${({ position, animationKind }) =>
    position === "left" &&
    animationKind === "expand" &&
    css`
      animation: ${translate({ x: "-32px", y: 0 }, { x: "-25%", y: 0 })} 200ms
        cubic-bezier(0, 1, 0.5, 1.25) 400ms both;
    `}
  ${({ position, animationKind }) =>
    position === "right" &&
    animationKind === "open" &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "32px", y: 0 })} 400ms ease-in
        400ms both;
    `}
    ${({ position, animationKind }) =>
    position === "right" &&
    animationKind === "expand" &&
    css`
      animation: ${translate({ x: "32px", y: 0 }, { x: "25%", y: 0 })} 200ms
        cubic-bezier(0, 1, 0.5, 1.25) 400ms both;
    `}
`;

const useAnimation = () => {
  const [animationKind, changeAnimationKind] = useState<"open" | "expand">(
    "open"
  );
  const toNextAnimation = () => {
    changeAnimationKind("expand");
  };
  return [animationKind, toNextAnimation] as [
    typeof animationKind,
    typeof toNextAnimation
  ];
};

const OpenAnime3: React.VFC = () => {
  const [animationKind, toNextAnimation] = useAnimation();
  return (
    <Wrapper>
      <RedOpener position="left" animationKind={animationKind} />
      <RedOpener
        position="right"
        animationKind={animationKind}
        onAnimationEnd={toNextAnimation}
      />
    </Wrapper>
  );
};

export default OpenAnime3;
