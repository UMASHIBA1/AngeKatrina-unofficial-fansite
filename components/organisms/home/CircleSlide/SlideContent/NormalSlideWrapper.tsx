import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { AnimationTimeProps } from "./SlideContent";

interface Props {
  slideNum: number;
  animationTimeProps: AnimationTimeProps;
  children: ReactNode;
  onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

const slideAnimation = (slideNum: number) => {
  // NOTE スライドの枚数が変わってもうまくkeyframeの%を調整できるように下の処理で色々やってる
  const props: { percentage: number; x: number }[] = [{ percentage: 0, x: 0 }];

  const basePercentage = 100 / (slideNum * 3 - 1);
  let previousNum = 0;
  for (const num of [...Array(slideNum).keys()]) {
    if (num !== slideNum - 1) {
      const showSlidePercentage = previousNum + basePercentage * 2;
      const x = num * -100;
      props.push({ percentage: showSlidePercentage, x: x });
      previousNum = showSlidePercentage;

      const moveSlidePercentage = previousNum + basePercentage;
      const next_x = (num + 1) * -100;
      props.push({ percentage: moveSlidePercentage, x: next_x });
      previousNum = moveSlidePercentage;
    } else {
      props.push({ percentage: 100, x: num * -100 });
    }
  }

  return keyframes`
	  ${props.map(({ percentage, x }) => {
      return `
		  ${percentage}% {
		  transform: translate(${x}%, 0);
		}
		  `;
    })}
	`;
};

const SlideWrapper = styled.div<{
  slideNum: number;
  animationTimeProps: AnimationTimeProps;
}>`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  animation: ${({ slideNum }) => slideAnimation(slideNum)}
    ${({ animationTimeProps }) => animationTimeProps.duration_ms}ms ease-out
    forwards ${({ animationTimeProps }) => animationTimeProps.delay_ms}ms;
`;

const NormalSlideWrapper: React.FC<Props> = (props: Props) => {
  return (
    <SlideWrapper
      slideNum={props.slideNum}
      animationTimeProps={props.animationTimeProps}
      onAnimationEnd={props.onSlideEndFC}
    >
      {props.children}
    </SlideWrapper>
  );
};

export default NormalSlideWrapper;
