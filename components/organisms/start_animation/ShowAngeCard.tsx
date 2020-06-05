import React from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import CircleFlash from "../../molecules/start_animation/CircleFlash";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : "0"};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-item: center;
  overflow: hidden;
`;

const ShowAngeCard: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <CircleFlash isStartAnimation={isStartAnimation} scale={3} blur="100px" />
    </Wrapper>
  );
};

export default ShowAngeCard;
