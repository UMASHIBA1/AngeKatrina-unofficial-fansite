import React from "react";
import styled from "styled-components";
import { fadeout, fadein } from "../../../styles/commonAnimation";
import { showAngeCardOrder } from "../../../constants/start_animation/animation_order";
import { tileNum } from "../../../constants/start_animation/showAngeCardSetting";
import { useTypedSelector } from "../../../redux/store";
import { showAngeCardZIndex } from "../../../constants/start_animation/zindex";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: ${({ isStartAnimation }) =>
    isStartAnimation ? showAngeCardZIndex : 0};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface TileProps {
  width: string;
  height: string;
  animationDelay_ms: number;
  isStartAnimation: boolean;
}

const Tile = styled.div<TileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a24;
  opacity: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms linear ${showAngeCardOrder.delay_ms}ms forwards,
    ${({ isStartAnimation }) => (isStartAnimation ? fadeout : "none")}
      ${showAngeCardOrder.duration_ms}ms linear
      ${({ animationDelay_ms }) =>
        showAngeCardOrder.delay_ms + animationDelay_ms}ms
      forwards;
`;

const ShowAngeCard: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  const tileDiameter_vh_vw = 100 / tileNum;
  const baseDelay = 2;

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      {[...Array(tileNum).keys()].map((index1) => (
        <Line key={index1}>
          {[...Array(tileNum).keys()].map((index2) => (
            <Tile
              isStartAnimation={isStartAnimation}
              animationDelay_ms={
                baseDelay * (tileNum - index1) * (tileNum - index2)
              }
              key={index2}
              width={`max(${tileDiameter_vh_vw}vw, ${tileDiameter_vh_vw}vh)`}
              height={`max(${tileDiameter_vh_vw}vw, ${tileDiameter_vh_vw}vh)`}
            />
          ))}
        </Line>
      ))}
    </Wrapper>
  );
};

export default ShowAngeCard;
