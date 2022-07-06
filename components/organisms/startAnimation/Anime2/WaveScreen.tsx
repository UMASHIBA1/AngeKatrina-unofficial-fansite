import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import WaveSvg from "../../../../public/svgs/startanimation/wave.svg";
import { translate } from "../../../../styles/commonAnimation";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: ${ANGE_WHITE};
`;

const CenterPoint = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: calc(25% - 16px);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const Wave = styled.div`
  animation: ${translate({ x: 0, y: 0 }, { x: 0, y: "-50%" })} 8000ms linear 0ms
    both infinite alternate;
`;

const WaveTop = styled.div<{
  speed: number;
  delayMs: number;
  opacity: number;
}>`
  position: absolute;
  bottom: 118px;
  right: 0%;
  width: 50%;
  ${({ opacity }) => css`
    opacity: ${opacity};
  `}
  ${({ speed, delayMs }) => css`
    animation: ${translate({ x: 0, y: 0 }, { x: "-100%", y: 0 })} ${speed}ms
      linear ${delayMs}ms both infinite;
  `}
  > svg {
    height: 100%;
    width: 100%;
  }
`;

const WaveBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 128px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const WaveScreen = () => {
  return (
    <Wrapper>
      <CenterPoint />
      <Wave>
        <WaveBottom />
        <WaveTop speed={7000} delayMs={2000} opacity={0.7}>
          <WaveSvg />
        </WaveTop>
      </Wave>
      {/* <WaveTop speed={8000} delayMs={1000} opacity={0.9}>
        <WaveSvg />
      </WaveTop>
      <WaveTop speed={9000} delayMs={0} opacity={1}>
        <WaveSvg />
      </WaveTop> */}
    </Wrapper>
  );
};

export default WaveScreen;
