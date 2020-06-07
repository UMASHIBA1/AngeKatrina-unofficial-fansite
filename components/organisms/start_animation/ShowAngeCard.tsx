import React, { useState } from "react";
import styled from "styled-components";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import { fadeout, fadein } from "../../../styles/commonAnimation";
import { showAngeCardOrder } from "../../../constants/start_animation/animation_order";
import useDidMount from "../../../hooks/useDidMount";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : "0"};
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const calcDiagonalLine = (width: number, height: number) => {
  return Math.sqrt(width ** 2 + height ** 2);
};

const calcLineWidth = (lineNum: number, width: number, height: number) => {
  const diagonalLine = calcDiagonalLine(width, height);
  return diagonalLine / lineNum;
};

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
`;

const Line = styled.div<{
  isStartAnimation: boolean;
  width: string;
  height: string;
  additionalDelay: number;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #ffffff;
  margin: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms linear ${showAngeCardOrder.delay_ms}ms both,
    ${({ isStartAnimation }) => (isStartAnimation ? fadeout : "none")}
      ${showAngeCardOrder.duration_ms}ms linear
      ${({ additionalDelay }) => showAngeCardOrder.delay_ms + additionalDelay}ms
      forwards;
`;

const useWindowWidthHeight = () => {
  const [width, changeWidth] = useState(0);
  const [height, changeHeight] = useState(0);
  useDidMount(() => {
    changeWidth(window.innerWidth);
    changeHeight(window.innerHeight);
  });
  return [width, height];
};

const ShowAngeCard: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );

  const lineNum = 15;
  const [windowWidth, windowHeight] = useWindowWidthHeight();
  const lineWidth = `${calcLineWidth(lineNum, windowWidth, windowHeight)}px`;
  const lineHeight = `${calcDiagonalLine(windowWidth, windowHeight)}px`;

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <LineWrapper>
        {[...Array(lineNum).keys()].map((index) => (
          <Line
            isStartAnimation={isStartAnimation}
            key={index}
            width={lineWidth}
            height={lineHeight}
            additionalDelay={20 * index}
          />
        ))}
      </LineWrapper>
    </Wrapper>
  );
};

export default ShowAngeCard;
