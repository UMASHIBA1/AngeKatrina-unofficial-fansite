import React, { ReactNode } from "react";
import OneSlideContent from "./OneSlideContent";
import NormalSlideWrapper from "./NormalSlideWrapper";
import SplitedSlideWrapper from "./SplitedSlideWrapper";

export interface Props {
  animationType: "slide" | "splitedSlide";
  slidePages: ReactNode[];
  animationTimeProps: AnimationTimeProps;
  onSlideEndFC?: () => void;
}

export interface AnimationTimeProps {
  duration_ms: number;
  delay_ms: number;
}

const SlideContent: React.FC<Props> = ({
  animationType,
  slidePages,
  onSlideEndFC,
  animationTimeProps,
}: Props) => {
  if (animationType === "slide") {
    return (
      <NormalSlideWrapper
        slideNum={slidePages.length}
        onSlideEndFC={onSlideEndFC}
        animationTimeProps={animationTimeProps}
      >
        {slidePages.map((children, index) => (
          <OneSlideContent key={index}>{children}</OneSlideContent>
        ))}
      </NormalSlideWrapper>
    );
  } else {
    return (
      <SplitedSlideWrapper slidePages={slidePages}>
        {slidePages.map((children, index) => (
          <OneSlideContent key={index}>{children}</OneSlideContent>
        ))}
      </SplitedSlideWrapper>
    );
  }
};

export default SlideContent;
