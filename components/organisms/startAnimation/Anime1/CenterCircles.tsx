import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import AnimationProps from "../../../../typing/AnimationProps";

interface Props {
  isStartAnimation: boolean;
}

const toCenterAnimation = keyframes`
    0% {
        transform: translateY(60vh);
    }

    100% {
        transform: translateY(0);
    }

`;

const centerCircleAnimationProps: AnimationProps = {
  duration_ms: 500,
  delay_ms: 400,
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 30px;
  gap: 18px;
`;

const BlackCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_BLACK};
  border-radius: 50%;
  border: 1px ${ANGE_WHITE} solid;
  animation: ${toCenterAnimation} ${centerCircleAnimationProps.duration_ms}ms
    cubic-bezier(0.25, 0, 0, 1.2) ${centerCircleAnimationProps.delay_ms + 200}ms
    both;
`;

const RedCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 50%;
  border: 1px ${ANGE_WHITE} solid;
  animation: ${toCenterAnimation} ${centerCircleAnimationProps.duration_ms}ms
    cubic-bezier(0.25, 0, 0, 1.2) ${centerCircleAnimationProps.delay_ms + 100}ms
    both;
`;

const YellowCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_YELLOW};
  border-radius: 50%;
  border: 1px ${ANGE_WHITE} solid;
  animation: ${toCenterAnimation} ${centerCircleAnimationProps.duration_ms}ms
    cubic-bezier(0.25, 0, 0, 1.2) ${centerCircleAnimationProps.delay_ms}ms both;
`;

const CenterCircles: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <YellowCircle />
        <RedCircle />
        <BlackCircle />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default CenterCircles;
