import React from "react";
import styled from "styled-components";
import { blackTransitionZIndex } from "../../../constants/start_animation/zindex";
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
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);
  return (
    <Wrapper isStartSummonAnimation={isStartSummonAnimation}>
      <BlackCircle
        isStartSummonAnimation={isStartSummonAnimation}
        size={size}
      />
    </Wrapper>
  );
};

export default BlackTransition;
