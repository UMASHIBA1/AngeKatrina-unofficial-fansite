import React from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import ShowScreenCircleMain from "../../molecules/start_animation/ShowScreenCircle";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : "0"};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const ShowAngeCard: React.FC = () => {
  const [isStartAnimation, size] = useTypedSelector((state) => [
    state.isStartSummonAnimation,
    state.sizes,
  ]);

  let showScreenCircleInitialScale;
  if (size === "sm") {
    showScreenCircleInitialScale = (sm_breakpoint / 100) * 2;
  } else if (size === "tablet") {
    showScreenCircleInitialScale = (tablet_breakpoint / 100) * 2;
  } else {
    // NOTE 画面の対応サイズは1920pxまでなので1920px / 100px * 2
    showScreenCircleInitialScale = 38.4;
  }

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <ShowScreenCircleMain
        isStartAnimation={isStartAnimation}
        scale={showScreenCircleInitialScale}
        blur="6px"
        opacity={0.6}
      />
      <ShowScreenCircleMain
        isStartAnimation={isStartAnimation}
        scale={showScreenCircleInitialScale}
        blur="20px"
        opacity={1}
      />
      <ShowScreenCircleMain
        isStartAnimation={isStartAnimation}
        scale={showScreenCircleInitialScale}
        blur="40px"
        opacity={0.6}
      />
    </Wrapper>
  );
};

export default ShowAngeCard;
