import React from "react";
import { SizeType } from "../../../typing/SizeType";
import styled from "styled-components";
import {
  fadein,
  toDeepDropShadow,
  removeDeepDropShadow,
  translate,
} from "../../../styles/commonAnimation";
import AngeTriangleSVG from "../../../public/start_animation/svgs/ange_triangle.svg";
import { useTypedSelector } from "../../../redux/store";
import { angeTriangleZIndex } from "../../../constants/start_animation/zindex";
import {
  angeTriangleFadeinOrder,
  angeTriangleDropShadowOrder,
  angeTriangleRemoveDropShadowOrder,
  angeTriangleUpLocationOrder,
} from "../../../constants/start_animation/animation_order";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";
import {
  smFontSize,
  tabletFontSize,
  pcFontSize,
  omataseMattaLineHeight,
  omataseMattaContent,
} from "../../../constants/start_animation/omataseMattaSetting";

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
  return sizeTypeJudge(size)(60, 80, 100);
};

interface AnimationAndSizeType {
  isStartSummonAnimation: boolean;
  size: SizeType;
}

const calcTopLocation = (size: SizeType) => {
  return sizeTypeJudge(size)(7, 9, 15);
};

const calcMovedLocation = (size: SizeType) => {
  const fontSize = sizeTypeJudge(size)(smFontSize, tabletFontSize, pcFontSize);
  const contentHalfLen = Math.ceil(omataseMattaContent.length / 2);
  const smXYLocation = {
    x: 0,
    y: `calc(${fontSize} * ${omataseMattaLineHeight} * -${contentHalfLen})`,
  };
  const tabletAndPCXYLocation = {
    x: `calc(${fontSize} * -${contentHalfLen})`,
    y: calcTopLocation(size),
  };

  return sizeTypeJudge(size)(
    smXYLocation,
    tabletAndPCXYLocation,
    tabletAndPCXYLocation
  );
};

const createLocationAdjuster = (
  size: SizeType,
  isStartSummonAnimation: boolean
) => {
  return styled.div`
    transform: translate(0, ${calcTopLocation(size)}px);
    animation: ${isStartSummonAnimation
        ? translate({ x: 0, y: calcTopLocation(size) }, calcMovedLocation(size))
        : "none"}
      ${angeTriangleUpLocationOrder.duration_ms}ms ease-out
      ${angeTriangleUpLocationOrder.delay_ms}ms forwards;
  `;
};

const createStyledTriangle = ({
  isStartSummonAnimation,
  size,
}: AnimationAndSizeType) => {
  if (isStartSummonAnimation) {
    return styled(AngeTriangleSVG)`
      width: ${calcTriangleWidthHeight(size)}px;
      height: ${calcTriangleWidthHeight(size)}px;
      opacity: 0;
      animation: ${fadein(0.7)} ${angeTriangleFadeinOrder.duration_ms}ms ease-in
          ${angeTriangleFadeinOrder.delay_ms}ms forwards,
        ${toDeepDropShadow(10, "#FFFFFF")}
          ${angeTriangleDropShadowOrder.duration_ms}ms linear
          ${angeTriangleDropShadowOrder.delay_ms}ms forwards,
        ${removeDeepDropShadow(10, "#FFFFFF")}
          ${angeTriangleRemoveDropShadowOrder.duration_ms}ms linear
          ${angeTriangleRemoveDropShadowOrder.delay_ms}ms forwards;
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
  const LocationAdjuster = createLocationAdjuster(size, isStartSummonAnimation);

  return (
    <Wrapper isStartSummonAnimation={isStartSummonAnimation}>
      <LocationAdjuster>
        <StyledTriangle />
      </LocationAdjuster>
    </Wrapper>
  );
};
export default AngeTriangle;
