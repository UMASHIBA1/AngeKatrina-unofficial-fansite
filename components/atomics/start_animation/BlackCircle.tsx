import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../constants/colors";
import { scale } from "../../../styles/commonAnimation";
import { SizeType } from "../../../typing/SizeType";
import {
  smSummonTextDiameter,
  tabletSummonTextDiameter,
  pcSummonTextDiameter,
} from "../../../constants/start_animation/diameters";

interface Props {
  isStartSummonAnimation: boolean;
  size: SizeType;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const circleDiameter = 100;

const calcScaleMagnification = (size: SizeType) => {
  if (size === "sm") {
    return smSummonTextDiameter / circleDiameter;
  } else if (size === "tablet") {
    return tabletSummonTextDiameter / circleDiameter;
  } else {
    return pcSummonTextDiameter / circleDiameter;
  }
};
const BlackCircleMain = styled.div<{
  isStartSummonAnimation: boolean;
  size: SizeType;
}>`
  width: ${circleDiameter}px;
  height: ${circleDiameter}px;
  border-radius: 50%;
  background-color: ${ANGE_BLACK};
  transform: scale(0);
  animation: ${({ isStartSummonAnimation, size }) =>
        isStartSummonAnimation ? scale(calcScaleMagnification(size)) : "none"}
      200ms cubic-bezier(0, 0, 0, 1.92) 2600ms forwards,
    ${({ isStartSummonAnimation }) =>
        isStartSummonAnimation ? scale(30) : "none"}
      500ms ease-out 3600ms forwards;
`;

const BlackCircle: React.FC<Props> = ({
  isStartSummonAnimation,
  size,
}: Props) => {
  return (
    <Wrapper>
      <BlackCircleMain
        isStartSummonAnimation={isStartSummonAnimation}
        size={size}
      />
    </Wrapper>
  );
};

export default BlackCircle;
