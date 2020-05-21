import React from "react";
import styled from "styled-components";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";

interface Props {
  top: number;
  left: number;
  diameter: number;
  circleNum: 1 | 2 | 3;
}

const Wrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallMagicCircle: React.FC<Props> = ({
  top,
  left,
  diameter,
  circleNum,
}: Props) => {
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
          SvgElement={MostIn}
          diameter={mostInDiameter}
          rotateDirection={"right"}
          isStartSummonAnimation={false}
          doAnimations={doAnimations}
        />
      ) : null}
      {circleNum >= 2 ? (
        <SingleMagicCircle
          SvgElement={SecondIn}
          diameter={secondInDiameter}
          rotateDirection={"left"}
          isStartSummonAnimation={false}
          doAnimations={doAnimations}
        />
      ) : null}
      <SingleMagicCircle
        SvgElement={FourthIn}
        diameter={diameter}
        rotateDirection={"right"}
        isStartSummonAnimation={false}
        doAnimations={doAnimations}
      />
    </Wrapper>
  );
};

export default SmallMagicCircle;
