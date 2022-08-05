import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import Wave from "../../../../public/svgs/startanimation/wave.svg";
import { translate } from "../../../../styles/commonAnimation";

const WaveWrapper = styled.div<{ animationKind: "in" | "out" }>`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
  ${({ animationKind }) =>
    animationKind === "in" &&
    css`
      animation: ${translate({ x: "-60%", y: "-60%" }, { x: 0, y: 0 })} 700ms
        ease-out 500ms both;
    `}
  ${({ animationKind }) =>
    animationKind === "out" &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "60%", y: 0 })} 700ms ease-in
        1300ms both;
    `}
`;

const waveTranslate = keyframes`
    0% {
      transform: translateX(41.666666%);
    }

    100% {
      transform: translateX(8.3333333%);
    }
`;

const centerCircleAnimation = keyframes`
    0% {
        transform: translateY(34px);
    }

    100% {
        transform: translateY(-34px);
    }
`;

const WaveAnimater = styled.div`
  position: absolute;
  top: 50%;
  right: calc(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: right;
  transform: translateY(-50%) scale(10, 2);
  overflow-x: hidden;
  > svg {
    transform-origin: right;
    animation: ${waveTranslate} 750ms linear 200ms both infinite;
  }
`;

const CenterCircle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  transform: translateY(34px);
  animation: ${centerCircleAnimation} 375ms ease-in-out 200ms both alternate
    infinite;
`;

const useWaveAnimation = () => {
  const [animationKind, changeAnimationKind] = useState<"in" | "out">("in");

  const toNextAnimation = () => {
    changeAnimationKind("out");
  };

  return [animationKind, toNextAnimation] as [
    typeof animationKind,
    typeof toNextAnimation
  ];
};

const CenterWave: React.VFC = () => {
  const [animationKind, toNextAnimation] = useWaveAnimation();

  return (
    <WaveWrapper animationKind={animationKind} onAnimationEnd={toNextAnimation}>
      <WaveAnimater>
        <Wave />
      </WaveAnimater>
      <CenterCircle />
    </WaveWrapper>
  );
};

export default CenterWave;
