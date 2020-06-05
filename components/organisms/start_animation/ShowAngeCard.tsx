import React from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import ShowScreenCircle from "../../molecules/start_animation/ShowScreenCircle";
import calcHidableCircleSize from "../../../systems/calcHidableCircleSize";

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

  const showScreenCircleInitialScale = calcHidableCircleSize(size);

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <ShowScreenCircle
        isStartAnimation={isStartAnimation}
        scale={showScreenCircleInitialScale}
        blur="6px"
      />
    </Wrapper>
  );
};

export default ShowAngeCard;
