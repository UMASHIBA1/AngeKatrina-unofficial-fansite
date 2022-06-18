import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_WHITE } from "../../../../constants/colors";
import {
  leftRotate,
  toVisible,
  translate,
} from "../../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
}

const animationTimeMs = 700;

const upLayer = keyframes`
  0% {
    isolation: auto;
  }

  100% {
    isolation: isolate;
  }
`;

const innerBlackAnimation = keyframes`
  0% {
    transform: scaleX(1);
    opacity: 0.6;
  }

  100% {
    transform: scaleX(2);
    opacity: 1;
  }
`;

const circleDiameterVh = 28;
const circleDiameterVw = 30;

const Wrapper = styled.div`
  position: absolute;
  left: 48px;
  bottom: 48px;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
  overflow: hidden;
  width: calc(min(${circleDiameterVh}vh, ${circleDiameterVw}vw) + 2px);
  height: calc(min(${circleDiameterVh}vh, ${circleDiameterVw}vw) + 2px);
  transform: rotate(-125deg);
  animation: ${translate(
      {
        x: 0,
        y: `calc(min(${circleDiameterVh}vh, ${circleDiameterVw}vw) + 50px)`,
      },
      { x: 0, y: 0 }
    )}
    ${animationTimeMs}ms cubic-bezier(0, 0, 0.5, 1.75) 0ms both;
  animation-direction: alternate;
  animation-iteration-count: 2;
`;

const HideHalfCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(50% + 2px);
  height: calc(100% + 2px);
  border-radius: 0 min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw)
    min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw) 0;
  background-color: ${ANGE_WHITE};
  transform-origin: center left;
  animation: ${leftRotate("0", "-1turn")} ${animationTimeMs}ms ease-in-out 0ms
    both;
  animation-direction: alternate;
  animation-iteration-count: 2;
`;

const LeftBlackBorder = styled.div`
  width: 50%;
  height: 100%;
  border: ${ANGE_BLACK} solid;
  border-radius: min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw) 0 0
    min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw);
  border-width: 2px 0 2px 2px;
  visibility: hidden;
  animation: ${toVisible} 0ms ease-in-out ${animationTimeMs / 2}ms forwards;
  animation-direction: alternate;
  animation-iteration-count: 2;
`;

const RightBlackBorder = styled.div`
  width: 50%;
  height: 100%;
  border: ${ANGE_BLACK} solid;
  border-radius: 0 min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw)
    min(${circleDiameterVh / 2}vh, ${circleDiameterVw / 2}vw) 0;
  border-width: 2px 2px 2px 0;
  animation: ${upLayer} 1ms ease-in-out ${animationTimeMs / 2}ms both;
  animation-direction: alternate;
  animation-iteration-count: 2;
`;

const InnerBlackRotater = styled.div`
  position: absolute;
  top: 0%;
  left: -100%;
  width: 100%;
  height: 100%;
  transform-origin: 150% 50%;
  animation: ${leftRotate("0", "-360deg")} 800ms ease-in-out 0ms both;
  animation-direction: alternate;
  animation-iteration-count: 2;
`;

const InnerBlack = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ANGE_BLACK};
  animation: ${innerBlackAnimation} 800ms ease-in-out 0ms both;
  animation-direction: alternate;
  animation-iteration-count: 2;
  transform-origin: left center;
`;

const LeftBottomBlackCircle: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <HideHalfCircle />
        <LeftBlackBorder />
        <RightBlackBorder />
        <InnerBlackRotater>
          <InnerBlack />
        </InnerBlackRotater>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default LeftBottomBlackCircle;
