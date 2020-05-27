import React from "react";
import styled from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import { flashOrder } from "../../../constants/start_animation/animation_order";
import { flashZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";

const FlashMain = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) => (isStartAnimation ? flashZIndex : "0")};
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #ffffff;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
    ${flashOrder.duration_ms}ms ease-out ${flashOrder.delay_ms}ms forwards;
`;

const Flash: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  return <FlashMain isStartAnimation={isStartAnimation} />;
};

export default Flash;
