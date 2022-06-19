import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import AnimationProps from "../../../../typing/AnimationProps";

interface Props {
  isStartAnimation: boolean;
  toNextAnimation: () => void;
}

const toCenterVerticalAnimation = keyframes`
    0% {
        transform: translateY(60vh);
    }

    100% {
        transform: translateY(0);
    }

`;

const toCenterHorizontalAnimation = (toXPx: number) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(${toXPx}px, 0) scale(1.2);
  }
`;

const centerExpandAnimation = keyframes`
  0% {
    transform: scale(1);
    isolation: auto;
  }

  100% {
    transform: scale(6);
    isolation: isolate;
    z-index: 5;
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

const BlackCircle = styled.div<{ isStartDisappear: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_BLACK};
  border-radius: 50%;
  border: 2px ${ANGE_WHITE} solid;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          animation: ${toCenterVerticalAnimation}
            ${centerCircleAnimationProps.duration_ms}ms
            cubic-bezier(0.25, 0, 0, 1.2)
            ${centerCircleAnimationProps.delay_ms + 200}ms both;
        `
      : css`
          animation: ${toCenterHorizontalAnimation(-50)} 500ms
            cubic-bezier(0.75, -0.5, 0, 1) 300ms both;
        `}
`;

const RedCircle = styled.div<{ isStartDisappear: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 50%;
  border: 2px ${ANGE_WHITE} solid;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          animation: ${toCenterVerticalAnimation}
            ${centerCircleAnimationProps.duration_ms}ms
            cubic-bezier(0.25, 0, 0, 1.2)
            ${centerCircleAnimationProps.delay_ms + 100}ms both;
        `
      : css`
          animation: ${centerExpandAnimation} 500ms
            cubic-bezier(0.75, -0.5, 0, 1) 300ms both;
        `}
`;

const YellowCircle = styled.div<{ isStartDisappear: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${ANGE_YELLOW};
  border-radius: 50%;
  border: 2px ${ANGE_WHITE} solid;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          animation: ${toCenterVerticalAnimation}
            ${centerCircleAnimationProps.duration_ms}ms
            cubic-bezier(0.25, 0, 0, 1.2)
            ${centerCircleAnimationProps.delay_ms}ms both;
        `
      : css`
          animation: ${toCenterHorizontalAnimation(50)} 500ms
            cubic-bezier(0.75, -0.5, 0, 1) 300ms both;
        `}
`;

const useToNextAnimation = (toNextAnimation: Props["toNextAnimation"]) => {
  const [animationEndCount, changeAnimationEndCount] = useState<number>(0);
  const toNextAnimationFc = () => {
    if (animationEndCount === 1) {
      toNextAnimation();
    } else {
      changeAnimationEndCount(animationEndCount + 1);
    }
  };

  return [toNextAnimationFc];
};

const CenterCircles: React.VFC<Props> = ({
  isStartAnimation,
  toNextAnimation,
}) => {
  const [isStartDisappear, changeIsStartDisapper] = useState<boolean>(false);
  const [toNextAnimationFc] = useToNextAnimation(toNextAnimation);
  if (isStartAnimation) {
    return (
      <Wrapper>
        <YellowCircle isStartDisappear={isStartDisappear} />
        <RedCircle
          isStartDisappear={isStartDisappear}
          onAnimationEnd={toNextAnimationFc}
        />
        <BlackCircle
          isStartDisappear={isStartDisappear}
          onAnimationEnd={() => changeIsStartDisapper(true)}
        />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default CenterCircles;
