import React from "react";
import styled from "styled-components";
import SingleMagicCircle from "../../../atomics/gatya/SingleMagicCircle";

export interface SmallMagicCircleProps {
  top: number;
  left: number;
  diameter: number;
  circleNum: 1 | 2 | 3;
  isStartSummonAnimation: boolean;
}

const Wrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SmallMagicCircle: React.FC<SmallMagicCircleProps> = ({
  top,
  left,
  diameter,
  circleNum,
  isStartSummonAnimation,
}: SmallMagicCircleProps) => {
  const mostInDiameter = diameter * 0.5;
  const secondInDiameter = diameter * 0.78;

  const doAnimations = {
    doShadow: false,
    doExpand: false,
    doFadeout: true,
  };

  return (
    <Wrapper top={top} left={left}>
      {circleNum >= 3 ? (
        <SingleMagicCircle
          svgName="mostIn"
          diameter={mostInDiameter}
          rotateDirection={"right"}
          isStartSummonAnimation={isStartSummonAnimation}
          doAnimations={doAnimations}
        />
      ) : null}
      {circleNum >= 2 ? (
        <SingleMagicCircle
          svgName="secondIn"
          diameter={secondInDiameter}
          rotateDirection={"left"}
          isStartSummonAnimation={isStartSummonAnimation}
          doAnimations={doAnimations}
        />
      ) : null}
      <SingleMagicCircle
        svgName="fourthIn"
        diameter={diameter}
        rotateDirection={"right"}
        isStartSummonAnimation={isStartSummonAnimation}
        doAnimations={doAnimations}
      />
    </Wrapper>
  );
};

export default SmallMagicCircle;
