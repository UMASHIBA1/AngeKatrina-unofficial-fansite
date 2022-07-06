import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { toVisible, translate } from "../../../../styles/commonAnimation";
import WaveScreen from "./WaveScreen";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200%;
  height: 200%;
  visibility: hidden;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  animation: ${toVisible} 0ms 200ms both,
    ${translate({ x: 0, y: 0 }, { x: "50%", y: "50%" })} 600ms
      cubic-bezier(0, 0.4, 0.25, 0.75) 200ms both;
`;

const RedScreen = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const RedScreenToWave: React.VFC = () => {
  return (
    <Wrapper>
      <WaveScreen />
      <RedScreen />
    </Wrapper>
  );
};

export default RedScreenToWave;
