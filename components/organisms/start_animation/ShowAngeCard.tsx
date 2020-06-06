import React from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : "0"};
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const ShowAngeCard: React.FC = () => {
  const isStartAnimation = useTypedSelector((state) => [
    state.isStartSummonAnimation,
  ]);

  return (
  );
};

export default ShowAngeCard;
