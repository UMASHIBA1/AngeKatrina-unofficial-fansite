import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_WHITE } from "../../../../constants/colors";
import {
  leftRotate,
  rightRotate,
  toVisible,
} from "../../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
}

const animationTimeMs = 500;

const upLayer = keyframes`
  0% {
    isolation: auto;
  }

  100% {
    isolation: isolate;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 84px;
  bottom: 64px;
  display: flex;
  flex-direction: row;
  width: min(20vh, 30vw);
  height: min(20vh, 30vw);
  transform: rotate(-125deg);
`;

const HideHalfCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(50% + 2px);
  height: calc(100% + 2px);
  border-radius: 0 min(10vh, 15vw) min(10vh, 15vw) 0;
  background-color: ${ANGE_WHITE};
  transform-origin: center left;
  animation: ${leftRotate("0", "-1turn")} ${animationTimeMs}ms ease-in-out 0ms
    both;
`;

const LeftBlackCircle = styled.div`
  width: 50%;
  height: 100%;
  border: ${ANGE_BLACK} solid;
  border-radius: min(10vh, 15vw) 0 0 min(10vh, 15vw);
  border-width: 2px 0 2px 2px;
  visibility: hidden;
  animation: ${toVisible} 0ms ease-in-out ${animationTimeMs / 2}ms forwards;
`;

const RightBlackCircle = styled.div`
  width: 50%;
  height: 100%;
  border: ${ANGE_BLACK} solid;
  border-radius: 0 min(10vh, 15vw) min(10vh, 15vw) 0;
  border-width: 2px 2px 2px 0;
  animation: ${upLayer} 1ms ease-in-out ${animationTimeMs / 2}ms both;
`;

const LeftBottomBlackCircle: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <HideHalfCircle />
        <LeftBlackCircle />
        <RightBlackCircle />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default LeftBottomBlackCircle;
