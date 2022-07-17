import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import { toVisible } from "../../../../styles/commonAnimation";
import CenterWave from "./CenterWave";
import WaveBG from "./WaveBG";

const bgToWhite = keyframes`
  0% {
    background-color: transparent;
  }

  100% {
    background-color: ${ANGE_WHITE};
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  visibility: hidden;
  animation: ${toVisible} 0ms 400ms forwards, ${bgToWhite} 0ms 550ms both;
`;

const WaveScreen: React.VFC = () => {
  return (
    <Wrapper>
      <WaveBG />
      <CenterWave />
    </Wrapper>
  );
};

export default WaveScreen;
