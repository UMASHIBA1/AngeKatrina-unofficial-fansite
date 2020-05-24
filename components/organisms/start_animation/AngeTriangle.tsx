import React from "react";
import { SizeType } from "../../../typing/SizeType";
import styled from "styled-components";
import {
  fadein,
  toDeepDropShadow,
  removeDeepDropShadow,
  translate,
  rightRotate,
} from "../../../styles/commonAnimation";
import AngeTriangleSVG from "../../../public/start_animation/svgs/ange_triangle.svg";
import { useTypedSelector } from "../../../redux/store";
import { angeTriangleZIndex } from "../../../constants/start_animation/zindex";
import {
  angeTriangleFadeinOrder,
  angeTriangleDropShadowOrder,
  angeTriangleRemoveDropShadowOrder,
  angeTriangleMoveUpOrder,
  angeTriangleUpRotateOrder,
  angeTriangleMoveDownOrder,
  angeTriangleDownRotateOrder,
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
  return sizeTypeJudge(size)(
    `calc(${smFontSize} * 1.5)`,
    `calc(${tabletFontSize} * 1.5)`,
    `calc(${pcFontSize} * 1.5)`
  );
};

interface ForAnimationType {
  isStartSummonAnimation: boolean;
  size: SizeType;
  isMoveToDown: boolean;
}

const calcTopLocation = (size: SizeType) => {
  return sizeTypeJudge(size)(7, 9, 15);
};

const calcMovedUpLocation = (size: SizeType) => {
  const fontSize = sizeTypeJudge(size)(smFontSize, tabletFontSize, pcFontSize);
  const contentHalfLen = Math.ceil(omataseMattaContent.length / 2);
  const xyLocation = {
    x: 0,
    y: `calc(${fontSize} * ${omataseMattaLineHeight} * -${contentHalfLen})`,
  };

  return xyLocation;
};

const calcMovedDownLocation = (size: SizeType) => {
  const fontSize = sizeTypeJudge(size)(smFontSize, tabletFontSize, pcFontSize);
  const contentHalfLen = Math.ceil(omataseMattaContent.length / 2);
  const multiple = omataseMattaLineHeight * contentHalfLen;
  const xyLocation = {
    x: 0,
    // NOTE「おまたせ　まった？」の?の後の隙間が狭かったから10px追加
    y: `calc(${fontSize} * ${multiple} + 10px)`,
  };

  return xyLocation;
};

const createLocationAdjuster = (
  size: SizeType,
  isStartSummonAnimation: boolean,
  isMoveToDown: boolean
) => {
  const movedUpLocation = calcMovedUpLocation(size);
  return styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, ${calcTopLocation(size)}px);
    animation: ${isStartSummonAnimation
          ? translate({ x: 0, y: calcTopLocation(size) }, movedUpLocation)
          : "none"}
        ${angeTriangleMoveUpOrder.duration_ms}ms ease-out
        ${angeTriangleMoveUpOrder.delay_ms}ms forwards,
      ${isMoveToDown
          ? translate(movedUpLocation, calcMovedDownLocation(size))
          : "none"}
        ${angeTriangleMoveDownOrder.duration_ms}ms ease-out
        ${angeTriangleMoveDownOrder.delay_ms}ms forwards;
  `;
};

const createStyledTriangle = ({
  isStartSummonAnimation,
  size,
  isMoveToDown,
}: ForAnimationType) => {
  if (isStartSummonAnimation) {
    return styled(AngeTriangleSVG)`
      width: ${calcTriangleWidthHeight(size)};
      height: ${calcTriangleWidthHeight(size)};
      position: absolute;
      opacity: 0;
      animation: ${fadein(0.7)} ${angeTriangleFadeinOrder.duration_ms}ms ease-in
          ${angeTriangleFadeinOrder.delay_ms}ms forwards,
        ${toDeepDropShadow(10, "#FFFFFF")}
          ${angeTriangleDropShadowOrder.duration_ms}ms linear
          ${angeTriangleDropShadowOrder.delay_ms}ms forwards,
        ${removeDeepDropShadow(10, "#FFFFFF")}
          ${angeTriangleRemoveDropShadowOrder.duration_ms}ms linear
          ${angeTriangleRemoveDropShadowOrder.delay_ms}ms forwards,
        ${rightRotate()} ${angeTriangleUpRotateOrder.duration_ms}ms linear
          ${angeTriangleUpRotateOrder.delay_ms}ms forwards,
        ${isMoveToDown ? rightRotate("0deg", "540deg") : "none"}
          ${angeTriangleDownRotateOrder.duration_ms}ms linear
          ${angeTriangleDownRotateOrder.delay_ms}ms forwards;
    `;
  } else {
    return styled(AngeTriangleSVG)`
      position: absolute;
      opacity: 0;
    `;
  }
};

const AngeTriangle: React.FC = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);
  const StyledTriangle = createStyledTriangle({
    size,
    isStartSummonAnimation,
    isMoveToDown: false,
  });
  const MoveDownStyledTriangle = createStyledTriangle({
    size,
    isStartSummonAnimation,
    isMoveToDown: true,
  });
  const LocationAdjuster = createLocationAdjuster(
    size,
    isStartSummonAnimation,
    false
  );
  const MoveDownLocationAdjuster = createLocationAdjuster(
    size,
    isStartSummonAnimation,
    true
  );

  return (
    <Wrapper isStartSummonAnimation={isStartSummonAnimation}>
      <LocationAdjuster>
        <StyledTriangle />
      </LocationAdjuster>
      <MoveDownLocationAdjuster>
        <MoveDownStyledTriangle />
      </MoveDownLocationAdjuster>
    </Wrapper>
  );
};
export default AngeTriangle;
