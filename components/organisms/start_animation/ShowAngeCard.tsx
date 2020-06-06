import React from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import { fadeout, fadein } from "../../../styles/commonAnimation";
import { showAngeCardOrder } from "../../../constants/start_animation/animation_order";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : "0"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Line = styled.div<{
  isStartAnimation: boolean;
  width: string;
  height: string;
  additionalDelay: number;
}>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #ffffff;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms linear ${showAngeCardOrder.delay_ms}ms both,
    ${({ isStartAnimation }) => (isStartAnimation ? fadeout : "none")}
      ${showAngeCardOrder.duration_ms}ms linear
      ${({ additionalDelay }) => showAngeCardOrder.delay_ms + additionalDelay}ms
      forwards;
`;

const ShowAngeCard: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );

  const lineNum = 10;

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      {[...Array(lineNum).keys()].map((index) => (
        <Line
          isStartAnimation={isStartAnimation}
          key={index}
          width={`calc(100% / ${lineNum})`}
          height={`100%`}
          additionalDelay={20 * index}
        />
      ))}
    </Wrapper>
  );
};

export default ShowAngeCard;
