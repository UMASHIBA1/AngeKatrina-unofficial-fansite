import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../../constants/colors";
import { scale } from "../../../../styles/commonAnimation";
import { SizeType } from "../../../../typing/SizeType";
import { blackCircleExpandOrder } from "../../../../constants/gatya/animation_order";
import sizeTypeJudge from "../../../../systems/sizeTypeJudge";

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
  animation: ${({ isStartSummonAnimation, size }) =>
      isStartSummonAnimation ? scale(sizeTypeJudge(size)(15, 20, 30)) : "none"}
    ${blackCircleExpandOrder.duration_ms}ms ease-out
    ${blackCircleExpandOrder.delay_ms}ms forwards;
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
