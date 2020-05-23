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

const createStyledTriangle = ({ isStartSummonAnimation, size }: Props) => {
  if (isStartSummonAnimation) {
    return styled(AngeTriangle)`
      position: relative;
      top ${judgeTriangleTop(size)}px;
      width: ${calcTriangleWidthHeight(size)}px;
      height: ${calcTriangleWidthHeight(size)}px;
      opacity: 0;
      animation: ${fadein(0.7)} 600ms ease-in 3200ms forwards,
        ${toDeepDropShadow(10, "#FFFFFF")} 600ms linear 3200ms forwards,
        ${removeDeepDropShadow(10, "#FFFFFF")} 1000ms linear 3900ms forwards;
    `;
  } else {
    return styled(AngeTriangle)`
      position: relative;
      opacity: 0;
    `;
  }
};

const BlackCircle: React.FC<Props> = (props: Props) => {
  const { isStartSummonAnimation, size } = props;

  const StyledTriangle = createStyledTriangle(props);
  return (
    <Wrapper>
      <BlackCircleMain
        isStartSummonAnimation={isStartSummonAnimation}
        size={size}
      />
      <StyledTriangle />
    </Wrapper>
  );
};

export default BlackCircle;
