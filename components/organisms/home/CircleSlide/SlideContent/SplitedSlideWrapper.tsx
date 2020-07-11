import React, { ReactNode } from "react";
import styled from "styled-components";
import { AnimationTimeProps } from "./SlideContent";
import slideAnimation from "./slideAnimation";

interface Props {
  slidePages: ReactNode[];
  animationTimeProps: AnimationTimeProps;
  // onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

const SplitedSlideWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const createClipPath = (slideIndex: 0 | 1 | 2 | 3 | 4, slideNum: number) =>
  `0 ${20 * slideIndex}%, ${slideNum * 100}% ${20 * slideIndex}%, ${
    slideNum * 100
  }% ${20 * slideIndex + 20}%, 0 ${20 * slideIndex + 20}%`;

const SplitedSlideOneLine = styled.div<{
  index: 0 | 1 | 2 | 3 | 4;
  slideNum: number;
  animationTimeProps: AnimationTimeProps;
}>`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  min-width: 100%;
  position: absolute;
  clip-path: polygon(
    ${({ index, slideNum }) => createClipPath(index, slideNum)}
  );
  animation: ${({ slideNum }) => slideAnimation(slideNum)}
    ${({ animationTimeProps }) => animationTimeProps.duration_ms}ms ease-out
    forwards
    ${({ animationTimeProps, index }) =>
      animationTimeProps.delay_ms + index * 100}ms;
`;

const OneSlideContent = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SplitedSlideWrapper: React.FC<Props> = ({
  slidePages,
  animationTimeProps,
}: Props) => {
  return (
    <SplitedSlideWrapperMain>
      {[0, 1, 2, 3, 4].map((index) => (
        <SplitedSlideOneLine
          index={index as 0 | 1 | 2 | 3 | 4}
          slideNum={slidePages.length}
          animationTimeProps={animationTimeProps}
          key={index}
        >
          {slidePages.map((children, index) => (
            <OneSlideContent key={index}>{children}</OneSlideContent>
          ))}
        </SplitedSlideOneLine>
      ))}
    </SplitedSlideWrapperMain>
  );
};

export default SplitedSlideWrapper;
