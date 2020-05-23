import React from "react";
import { SizeType } from "../../../typing/SizeType";
import styled from "styled-components";
import {
  fadein,
  toDeepDropShadow,
  removeDeepDropShadow,
} from "../../../styles/commonAnimation";
import AngeTriangleSVG from "../../../public/start_animation/svgs/ange_triangle.svg";
import {
  smSummonTextDiameter,
  tabletSummonTextDiameter,
  pcSummonTextDiameter,
} from "../../../constants/start_animation/diameters";
import { useTypedSelector } from "../../../redux/store";
import { angeTriangleZIndex } from "../../../constants/start_animation/zindex";
import {
  angeTriangleFadein,
  angeTriangleDropShadow,
  angeTriangleRemoveDropShadow,
} from "../../../constants/start_animation/animation_order";

const Wrapper = styled.div<{ isStartSummonAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartSummonAnimation }) =>
    isStartSummonAnimation ? angeTriangleZIndex : 1};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

interface AnimationAndSizeType {
  isStartSummonAnimation: boolean;
  size: SizeType;
}

const createStyledTriangle = ({
  isStartSummonAnimation,
  size,
}: AnimationAndSizeType) => {
  if (isStartSummonAnimation) {
    return styled(AngeTriangleSVG)`
        position: relative;
        top ${judgeTriangleTop(size)}px;
        width: ${calcTriangleWidthHeight(size)}px;
        height: ${calcTriangleWidthHeight(size)}px;
        opacity: 0;
        animation: ${fadein(0.7)} ${angeTriangleFadein.duration}ms ease-in ${
      angeTriangleFadein.delay
    }ms forwards,
          ${toDeepDropShadow(10, "#FFFFFF")} ${
      angeTriangleDropShadow.duration
    }ms linear ${angeTriangleDropShadow.delay}ms forwards,
          ${removeDeepDropShadow(10, "#FFFFFF")} ${
      angeTriangleRemoveDropShadow.duration
    }ms linear ${angeTriangleRemoveDropShadow.delay}ms forwards;
      `;
  } else {
    return styled(AngeTriangleSVG)`
      position: relative;
      opacity: 0;
    `;
  }
};

const AngeTriangle: React.FC = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);
  const StyledTriangle = createStyledTriangle({ size, isStartSummonAnimation });

  return (
    <Wrapper isStartSummonAnimation={isStartSummonAnimation}>
      <StyledTriangle />
    </Wrapper>
  );
};
export default AngeTriangle;
