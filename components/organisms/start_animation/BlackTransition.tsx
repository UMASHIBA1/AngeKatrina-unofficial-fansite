import React from "react";
import styled from "styled-components";
import { blackTransitionZIndex } from "../../../constants/zindexs/start_animation";
import BlackCircle from "../../atomics/start_animation/BlackCircle";
import { useTypedSelector } from "../../../redux/store";

const Wrapper = styled.div<{ isStartSummonAnimation: boolean }>`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: ${({ isStartSummonAnimation }) =>
    isStartSummonAnimation ? blackTransitionZIndex : 1};
`;

const BlackTransition: React.FC = () => {
  const isStartSummonAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  return (
    <Wrapper isStartSummonAnimation={isStartSummonAnimation}>
      <BlackCircle isStartSummonAnimation={isStartSummonAnimation} />
    </Wrapper>
  );
};

export default BlackTransition;
