import React from "react";
import styled from "styled-components";
import { flashZIndex } from "../../../../constants/gatya/zindex";
import { useTypedSelector } from "../../../../redux/store";
import LineFlash from "./LineFlash";
import CircleFlash from "./CircleFlash";
import HideScreenCircleFlash from "./HideScreenCircleFlash";
import {
  tablet_breakpoint,
  sm_breakpoint,
} from "../../../../constants/breakpoints";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) => (isStartAnimation ? flashZIndex : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const Flash: React.FC = () => {
  const [
    size,
    isStartAnimation,
  ] = useTypedSelector(({ isStartSummonAnimation, sizes }) => [
    sizes,
    isStartSummonAnimation,
  ]);

  let deepCircleFlashScaleBase;
  if (size === "sm") {
    deepCircleFlashScaleBase = (sm_breakpoint / 100) * 1.5;
  } else if (size === "tablet") {
    deepCircleFlashScaleBase = (tablet_breakpoint / 100) * 1.5;
  } else {
    // NOTE 画面サイズ1920までの対応なので 1920px / 100px * 1.5(大体ルート2) = 大体29
    deepCircleFlashScaleBase = 29;
  }

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <LineFlash isStartAnimation={isStartAnimation} scale={10} blur="1px" />
      <LineFlash
        isStartAnimation={isStartAnimation}
        scale={8}
        blur="1px"
        rotate="40deg"
        top="-70px"
      />
      <LineFlash
        isStartAnimation={isStartAnimation}
        scale={5.5}
        blur="1px"
        rotate="-60deg"
        top="60px"
      />
      <CircleFlash isStartAnimation={isStartAnimation} scale={3} blur="20px" />
      <CircleFlash isStartAnimation={isStartAnimation} scale={3} blur="100px" />
      <CircleFlash isStartAnimation={isStartAnimation} scale={2} blur="25px" />
      <HideScreenCircleFlash
        isStartAnimation={isStartAnimation}
        scale={deepCircleFlashScaleBase}
        blur="6px"
      />
    </Wrapper>
  );
};

export default Flash;
