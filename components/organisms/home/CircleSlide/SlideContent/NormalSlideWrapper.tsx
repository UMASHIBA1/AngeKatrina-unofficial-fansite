import React from "react";
import styled from "styled-components";
import { AnimationTimeProps } from "./SlideContent";
import slideAnimation from "./slideAnimation";
import NormalOneSlideContent from "./NormalOneSlideContent";
import contentDataType from "../contentDatas/contentDataType";

interface Props {
  slidePages: contentDataType["slidePages"];
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
      {slidePages.map(({ node, key }) => (
        <NormalOneSlideContent key={key}>{node}</NormalOneSlideContent>
      ))}
    </SlideWrapper>
  );
};

export default NormalSlideWrapper;
