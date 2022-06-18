import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import { scale, translate } from "../../../../styles/commonAnimation";
import AnimationProps from "../../../../typing/AnimationProps";

// MEMO: 左下右から線を飛ばして円を充填するみたいな感じにする

interface Props {
  isStartAnimation: boolean;
}

const yellowLineAnimationProps: AnimationProps = {
  duration_ms: 500,
  delay_ms: 200,
};

const redLineAnimationProps: AnimationProps = {
  duration_ms: 400,
  delay_ms: 300,
};

const blackLineAnimationProps: AnimationProps = {
  duration_ms: 500,
  delay_ms: 400,
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55vw;
  height: 30vh;
`;

const YellowCircle = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 16px;
  left: 0;
  width: 48px;
  height: 48px;
  background-color: ${ANGE_YELLOW};
  border-radius: 50%;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          transform: scale(0);
          /* 0.225 = 45vw / 200vw */
          animation: ${scale(1)} ${yellowLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${yellowLineAnimationProps.delay_ms +
            yellowLineAnimationProps.duration_ms * 0.225}ms
            forwards;
        `
      : css`
          transform: scale(1);
          animation: ${scale(0)} ${yellowLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${yellowLineAnimationProps.delay_ms +
            yellowLineAnimationProps.duration_ms * 0.225}ms
            forwards;
        `}
`;

const RedCircle = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 25vh;
  left: 14%;
  width: 102px;
  height: 102px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 50%;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          transform: scale(0);
          /* 0.375 = 75vh / 200vh */
          animation: ${scale(1)} ${redLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${redLineAnimationProps.delay_ms +
            redLineAnimationProps.duration_ms * 0.375}ms
            forwards;
        `
      : css`
          transform: scale(1);
          animation: ${scale(0)} ${redLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${redLineAnimationProps.delay_ms +
            redLineAnimationProps.duration_ms * 0.375}ms
            forwards;
        `}
`;

const BlackCircle = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 84px;
  right: 13.75vw;
  width: 74px;
  height: 74px;
  background-color: ${ANGE_BLACK};
  border-radius: 50%;
  ${({ isStartDisappear }) =>
    !isStartDisappear
      ? css`
          transform: scale(0);
          /* 0.06875 = 13.75vw / 200vw */
          animation: ${scale(1)} ${blackLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${blackLineAnimationProps.delay_ms +
            blackLineAnimationProps.duration_ms * 0.06875}ms
            forwards;
        `
      : css`
          transform: scale(1);
          /* 0.06875 = 13.75vw / 200vw */
          animation: ${scale(0)} ${blackLineAnimationProps.duration_ms / 2}ms
            ease-in-out
            ${blackLineAnimationProps.delay_ms +
            blackLineAnimationProps.duration_ms * 0.06875}ms
            forwards;
        `}
`;

const YellowLine = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 40px;
  right: 100vw;
  width: 100vw;
  height: 1px;
  background-color: ${ANGE_YELLOW};
  animation: ${translate({ x: 0, y: 0 }, { x: "200vw", y: 0 })}
    ${yellowLineAnimationProps.duration_ms}ms linear
    ${yellowLineAnimationProps.delay_ms}ms both;
`;

const RedLine = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 100vh;
  right: calc(47.3vw - 51px);
  width: 1px;
  height: 100vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  animation: ${translate({ x: 0, y: 0 }, { x: 0, y: "-200vh" })}
    ${redLineAnimationProps.duration_ms}ms linear
    ${redLineAnimationProps.delay_ms}ms both;
`;

const BlackLine = styled.div<{ isStartDisappear: boolean }>`
  position: absolute;
  top: 121px;
  right: -100vw;
  width: 100vw;
  height: 1px;
  background-color: ${ANGE_BLACK};
  animation: ${translate({ x: 0, y: 0 }, { x: "-200vw", y: 0 })}
    ${blackLineAnimationProps.duration_ms}ms linear
    ${blackLineAnimationProps.delay_ms}ms both;
`;

const RightTopCircles: React.VFC<Props> = ({ isStartAnimation }) => {
  const [isStartDisappear, changeIsStartDisappear] = useState<boolean>(false);
  if (isStartAnimation) {
    return (
      <Wrapper>
        <YellowLine
          key={`${isStartDisappear}`}
          isStartDisappear={isStartDisappear}
        />
        <RedLine
          key={`${isStartDisappear}`}
          isStartDisappear={isStartDisappear}
        />
        <BlackLine
          key={`${isStartDisappear}`}
          isStartDisappear={isStartDisappear}
        />
        <RedCircle isStartDisappear={isStartDisappear} />
        <BlackCircle
          isStartDisappear={isStartDisappear}
          onAnimationEnd={() => changeIsStartDisappear(true)}
        />
        <YellowCircle isStartDisappear={isStartDisappear} />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default RightTopCircles;
