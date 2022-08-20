import React from "react";
import styled, { css } from "styled-components";
import SingleMagicCircle from "../../../atomics/gatya/SingleMagicCircle";

export interface SmallMagicCircleProps {
  top: number;
  left: number;
  diameter: number;
  circleNum: 1 | 2 | 3;
  isStartSummonAnimation: boolean;
}

const Wrapper = styled.div<{ left: number; top: number; diameter: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  ${({ top, left }) => css`
    transform: translate(calc(-50% + ${left}px), calc(-50% + ${top}px));
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ diameter }) => css`
    width: ${diameter}px;
    height: ${diameter}px;
  `}
`;

const SmallMagicCircle: React.FC<SmallMagicCircleProps> = ({
  top,
  left,
  diameter,
  circleNum,
  isStartSummonAnimation,
}: SmallMagicCircleProps) => {
  const mostInDiameter = diameter * 0.58;
  const secondInDiameter = diameter * 0.75;

  const doAnimations = {
    doShadow: false,
    doExpand: false,
    doFadeout: true,
  };

  return (
    <Wrapper top={top} left={left} diameter={diameter}>
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
