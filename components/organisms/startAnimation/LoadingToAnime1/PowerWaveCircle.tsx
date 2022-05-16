import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_YELLOW } from "../../../../constants/colors";
import { powerWave } from "./animationOrder";

interface Props {
  isStartAnimation: boolean;
}

const powerChargeAnimation = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(2);
        opacity: 0;
    }
`;

const Circle = styled.div<{ isStartAnimation: boolean; delayMs: number }>`
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% + 4px);
  width: 120px;
  height: 120px;
  border: 2px solid ${ANGE_YELLOW};
  border-radius: 50%;
  ${({ isStartAnimation, delayMs }) =>
    isStartAnimation &&
    css`
      animation: ${powerChargeAnimation} ${powerWave.duration_ms}ms linear
        ${delayMs}ms both;
    `}
`;

const PowerWaveCircle: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <React.Fragment>
      <Circle
        isStartAnimation={isStartAnimation}
        delayMs={powerWave.delay_ms}
      />
      <Circle
        isStartAnimation={isStartAnimation}
        delayMs={powerWave.delay_ms + 100}
      />
      <Circle
        isStartAnimation={isStartAnimation}
        delayMs={powerWave.delay_ms + 200}
      />
    </React.Fragment>
  );
};

export default PowerWaveCircle;
