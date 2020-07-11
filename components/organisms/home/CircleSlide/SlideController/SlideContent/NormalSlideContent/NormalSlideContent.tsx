import React from "react";
import styled from "styled-components";
import slideAnimation from "../slideAnimation";
import NormalOneSlideContent from "./NormalOneSlideContent";
import ContentDataType from "../contentDatas/ContentDataType";
import AnimationProps from "../../../../../../../typing/AnimationProps";

interface Props {
  slidePages: ContentDataType["slidePages"];
  animationTimeProps: AnimationProps;
  onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

const SlideWrapper = styled.div<{
  slideNum: number;
  animationTimeProps: AnimationProps;
}>`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  animation: ${({ slideNum }) => slideAnimation(slideNum)}
    ${({ animationTimeProps }) => animationTimeProps.duration_ms}ms ease-out
    forwards ${({ animationTimeProps }) => animationTimeProps.delay_ms}ms;
`;

const NormalSlideContent: React.FC<Props> = ({
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

export default NormalSlideContent;
