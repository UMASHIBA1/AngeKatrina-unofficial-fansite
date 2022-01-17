import React from "react";
import styled, { css } from "styled-components";
import FirstInsideCircle from "../../../../../../public/svgs/common/one_yellow_circle.svg";
import SecondInsideCircle from "../../../../../../public/svgs/common/one_black_circle.svg";
import ThirdInsideCircle from "../../../../../../public/svgs/common/two_yellow_two_red_circle.svg";
import { TA_F1_BLOCK_LINE } from "../../../../../../constants/cssProps";
import { ANGE_RED } from "../../../../../../constants/colors";
import OutsideRotateLine from "./OutsideRotateLine";
import {
  fadein,
  scale,
  translate,
} from "../../../../../../styles/commonAnimation";
import { startAnimationBaseDelayMs } from "./animationBaseDelay";

interface Props {
  runStartAnimation: boolean;
}

const SVGWrapper = styled.div<{
  width: number;
  animationDelay: number;
  runStartAnimation: boolean;
}>`
  position: absolute;
  ${({ width }) =>
    width &&
    css`
      top: calc(50% - width / 2);
      left: calc(50% - width / 2);
    `}
  width: ${({ width }) => width}px;
  transform: scale(0);
  ${({ runStartAnimation, animationDelay }) =>
    runStartAnimation &&
    css`
      animation: ${scale(1)} 800ms ease-out forwards
        ${startAnimationBaseDelayMs + animationDelay}ms;
    `}
`;

const Wrapper = styled.div<{ runStartAnimation: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
  ${({ runStartAnimation }) =>
    !runStartAnimation &&
    css`
      display: none;
    `}
`;

const CenterText = styled.p<{ runStartAnimation: boolean }>`
  font-size: 28px;
  color: ${ANGE_RED};
  ${TA_F1_BLOCK_LINE}
  opacity: 0;
  ${({ runStartAnimation }) =>
    runStartAnimation &&
    css`
      animation: ${fadein()} ease-in-out 1ms forwards
        ${startAnimationBaseDelayMs + 1000}ms;
    `}
  margin: 0;
`;

const TextWrapper = styled.div<{ runStartAnimation: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${ANGE_RED};
    transform: translate(-100%, 0);
    ${({ runStartAnimation }) =>
      runStartAnimation &&
      css`
        animation: ${translate({ x: "-100%", y: 0 }, { x: "100%", y: 0 })}
          ease-in-out 400ms forwards ${startAnimationBaseDelayMs + 800}ms;
      `}
  }
`;

const CenterCircle: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      <OutsideRotateLine
        runStartAnimation={runStartAnimation}
        diameter={470}
        leftOrRightRotate="right"
        startRotateDeg={0}
        animationDelayMs={0}
      />
      <OutsideRotateLine
        runStartAnimation={runStartAnimation}
        diameter={490}
        leftOrRightRotate="left"
        startRotateDeg={180}
        animationDelayMs={100}
      />
      <OutsideRotateLine
        runStartAnimation={runStartAnimation}
        diameter={510}
        leftOrRightRotate="right"
        startRotateDeg={240}
        animationDelayMs={200}
      />
      <SVGWrapper
        width={450}
        animationDelay={200}
        runStartAnimation={runStartAnimation}
      >
        <ThirdInsideCircle />
      </SVGWrapper>
      <SVGWrapper
        width={415}
        animationDelay={350}
        runStartAnimation={runStartAnimation}
      >
        <SecondInsideCircle />
      </SVGWrapper>
      <SVGWrapper
        width={380}
        animationDelay={500}
        runStartAnimation={runStartAnimation}
      >
        <FirstInsideCircle />
      </SVGWrapper>
      <TextWrapper runStartAnimation={runStartAnimation}>
        <CenterText runStartAnimation={runStartAnimation}>
          どれにする？
        </CenterText>
      </TextWrapper>
    </Wrapper>
  );
};

export default CenterCircle;
