import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import { toVisible } from "../../../../styles/commonAnimation";
import BottomWave from "./BottomWave";
import CenterWave from "./CenterWave";
import WaveBG from "./WaveBG";

interface Props {
  mode: "main" | "background";
}

const bgToWhite = keyframes`
  0% {
    background-color: transparent;
  }

  100% {
    background-color: ${ANGE_WHITE};
  }
`;

const Wrapper = styled.div<{ mode: Props["mode"] }>`
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
  ${({ mode }) =>
    mode === "background" &&
    css`
      filter: blur(2px);
    `}
`;

const WaveScreen: React.VFC<Props> = ({ mode }) => {
  return (
    <Wrapper mode={mode}>
      <WaveBG />
      {mode === "main" && (
        <>
          <BottomWave />
          <CenterWave />
        </>
      )}
    </Wrapper>
  );
};

export default WaveScreen;
