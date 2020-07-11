import React, { ReactNode } from "react";
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
        slidePages={slidePages}
        onSlideEndFC={onSlideEndFC}
        animationTimeProps={animationTimeProps}
      />
    );
  } else {
    return (
      <SplitedSlideWrapper
        slidePages={slidePages}
        animationTimeProps={animationTimeProps}
      />
    );
  }
};

export default SlideContent;
