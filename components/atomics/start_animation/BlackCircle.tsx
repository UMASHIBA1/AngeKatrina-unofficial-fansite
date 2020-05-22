import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../constants/colors";
import AngeTriangle from "../../../public/start_animation/svgs/ange_triangle.svg";
import {
  scale,
  fadein,
  toDeepDropShadow,
  removeDeepDropShadow,
} from "../../../styles/commonAnimation";
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
  position: absolute;
  width: ${circleDiameter}px;
  height: ${circleDiameter}px;
  border-radius: 50%;
  background-color: ${ANGE_BLACK};
  transform: scale(0);
  animation: ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? scale(30) : "none"}
    600ms ease-out 2600ms forwards;
`;

const calcTriangleWidthHeight = (size: SizeType) => {
  if (size === "sm") {
    return smSummonTextDiameter * 0.6;
  } else if (size === "tablet") {
    return tabletSummonTextDiameter * 0.7;
  } else {
    return pcSummonTextDiameter * 0.5;
  }
};

const judgeTriangleTop = (size: SizeType) => {
  if (size === "sm") {
    return 7;
  } else if (size === "tablet") {
    return 9;
  } else {
    return 15;
  }
};

const StyledTriangle = styled(AngeTriangle)<{
  isStartSummonAnimation: boolean;
  size: SizeType;
}>`
  position: relative;
  top ${({ size }) => judgeTriangleTop(size)}px;
  width: ${({ size }) => calcTriangleWidthHeight(size)}px;
  height: ${({ size }) => calcTriangleWidthHeight(size)}px;
  opacity: 0;
  animation: ${({ isStartSummonAnimation }) =>
    isStartSummonAnimation ? fadein(0.7) : "none"}
    600ms ease-in 3200ms forwards,
    ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? toDeepDropShadow(10, "#FFFFFF") : "none"}
    600ms linear 3200ms forwards,
    ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? removeDeepDropShadow(10, "#FFFFFF") : "none"}
    1000ms linear 3900ms forwards;
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
      <StyledTriangle
        isStartSummonAnimation={isStartSummonAnimation}
        size={size}
      ></StyledTriangle>
    </Wrapper>
  );
};

export default BlackCircle;
