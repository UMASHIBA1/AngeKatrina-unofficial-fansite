import React, { ReactNode } from "react";
import styled from "styled-components";
import { AnimationTimeProps } from "./SlideContent";
import slideAnimation from "./slideAnimation";
import NormalOneSlideContent from "./NormalOneSlideContent";

interface Props {
  slidePages: ReactNode[];
  animationTimeProps: AnimationTimeProps;
  onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

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

const NormalSlideWrapper: React.FC<Props> = ({
  slidePages,
  animationTimeProps,
  onSlideEndFC,
}: Props) => {
  return (
    <SlideWrapper
      slideNum={slidePages.length}
      animationTimeProps={animationTimeProps}
      onAnimationEnd={onSlideEndFC}
    >
      {slidePages.map((children, index) => (
        <NormalOneSlideContent key={index}>{children}</NormalOneSlideContent>
      ))}
    </SlideWrapper>
  );
};

export default NormalSlideWrapper;
