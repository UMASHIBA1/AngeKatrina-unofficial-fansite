import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import RedWave from "../../../../public/svgs/startanimation/wave.svg";

const WaveWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
  > svg {
    transform: scale(5, 2);
    transform-origin: right;
  }
`;

const waveTranslate = keyframes`
    0% {
      transform: translateX(41.666%);
    }

    100% {
      transform: translateX(8.333%);
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
  right: calc(50% + 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: right;
  transform: translateY(-50%) scale(5, 2);
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

const CenterWave: React.VFC = () => {
  return (
    <WaveWrapper>
      <WaveAnimater>
        <RedWave />
      </WaveAnimater>
      <CenterCircle />
    </WaveWrapper>
  );
};

export default CenterWave;
