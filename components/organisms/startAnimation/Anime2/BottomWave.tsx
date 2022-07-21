import React from "react";
import styled, { keyframes } from "styled-components";
import RedWave from "../../../../public/svgs/startanimation/red-wave.svg";
import YellowWave from "../../../../public/svgs/startanimation/yellow-wave.svg";
import BlackWave from "../../../../public/svgs/startanimation/black-wave.svg";

const waveAnimation = keyframes`
    0% {
        transform: scale(7,3) translateX(0);
    }

    50% {
        transform: scale(7,4.5) translateX(-12.5%);
    }

    100% {
        transform: scale(7,3) translateX(-25%);
    }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
`;

const Wave = styled.div`
  position: absolute;
  left: 0;
  > svg {
    transform-origin: left;
  }
  &:nth-child(1) {
    top: 40%;
    > svg {
      animation: ${waveAnimation} 4500ms linear -400ms both infinite;
    }
  }
  &:nth-child(2) {
    top: 50%;
    > svg {
      animation: ${waveAnimation} 3000ms linear -900ms both infinite;
    }
  }
  &:nth-child(3) {
    top: 60%;
    > svg {
      animation: ${waveAnimation} 1500ms linear 0ms both infinite;
    }
  }
`;

const BottomWave = () => {
  return (
    <Wrapper>
      <Wave>
        <YellowWave />
      </Wave>
      <Wave>
        <RedWave />
      </Wave>
      <Wave>
        <BlackWave />
      </Wave>
    </Wrapper>
  );
};

export default BottomWave;
