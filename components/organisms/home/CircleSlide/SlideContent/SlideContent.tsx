import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import OneSlideContent from "./OneSlideContent";

interface AnimationTimeProps {
  duration_ms: number;
  delay_ms: number;
}

export interface Props {
  animationType: "slide" | "splitedSlide";
  slidePages: ReactNode[];
  animationTimeProps: AnimationTimeProps;
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

const SplitedSlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const clipPathPropList = [
  "0 0, 100% 0, 100% 20%, 0 20%",
  "0 20%, 100% 20%, 100% 40%, 0 40%",
  "0 40%, 100% 40%, 100% 60%, 0 60%",
  "0 60%, 100% 60%, 100% 80%, 0 80%",
  "0 80%, 100% 80%, 100% 100%, 0 100%",
];

const SplitedSlideOneLine = styled.div<{ index: 0 | 1 | 2 | 3 | 4 }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: polygon(${({ index }) => clipPathPropList[index]});
`;

const SlideContent: React.FC<Props> = ({
  animationType,
  slidePages,
  onSlideEndFC,
  animationTimeProps,
}: Props) => {
  if (animationType === "slide") {
    return (
      <SlideWrapper
        slideNum={slidePages.length}
        onAnimationEnd={onSlideEndFC}
        animationTimeProps={animationTimeProps}
      >
        {slidePages.map((children, index) => (
          <OneSlideContent key={index}>{children}</OneSlideContent>
        ))}
      </SlideWrapper>
    );
  } else {
    return (
      <SplitedSlideWrapper>
        {[0, 1, 2, 3, 4].map((index) => (
          <SplitedSlideOneLine index={index as 0 | 1 | 2 | 3 | 4} key={index}>
            {slidePages.map((children, index) => (
              <OneSlideContent key={index}>{children}</OneSlideContent>
            ))}
          </SplitedSlideOneLine>
        ))}
      </SplitedSlideWrapper>
    );
  }
};

export default SlideContent;
