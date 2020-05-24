import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../constants/colors";
import { scale } from "../../../styles/commonAnimation";
import { SizeType } from "../../../typing/SizeType";
import { blackCircleExpandOrder } from "../../../constants/start_animation/animation_order";

interface Props {
  isStartSummonAnimation: boolean;
  size: SizeType;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const circleDiameter = 100;

const BlackCircleMain = styled.div<{
  isStartSummonAnimation: boolean;
  size: SizeType;
}>`
  position: absolute;
  width: ${circleDiameter}px;
  height: ${circleDiameter}px;
  border-radius: 50%;
  background-color: ${ANGE_BLACK};
  transform: scale(0);
  animation: ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? scale(30) : "none"}
    ${blackCircleExpandOrder.duration}ms ease-out
    ${blackCircleExpandOrder.delay}ms forwards;
`;

const BlackCircle: React.FC<Props> = ({
  isStartSummonAnimation,
  size,
}: Props) => {
  return (
    <Wrapper>
      <BlackCircleMain
        isStartSummonAnimation={isStartSummonAnimation}
        size={size}
      />
    </Wrapper>
  );
};

export default BlackCircle;
