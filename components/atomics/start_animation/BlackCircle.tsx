import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../constants/colors";
import { scale } from "../../../styles/commonAnimation";

interface Props {
  isStartSummonAnimation: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlackCircleMain = styled.div<{ isStartSummonAnimation: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${ANGE_BLACK};
  transform: scale(0);
  animation: ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? scale(30) : "none"}
    500ms ease-out 2600ms forwards;
`;

const BlackCircle: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <BlackCircleMain isStartSummonAnimation={props.isStartSummonAnimation} />
    </Wrapper>
  );
};

export default BlackCircle;
