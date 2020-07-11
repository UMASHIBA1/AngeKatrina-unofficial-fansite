import React, { ReactNode } from "react";
import NormalSlideContent from "./NormalSlideContent/NormalSlideContent";
import SplitedSlideContent from "./SplitedSlideContent/SplitedSlideContent";

interface SlidePageType {
  node: ReactNode;
  key: string | number;
}

export interface Props {
  animationType: "slide" | "splitedSlide";
  slidePages: SlidePageType[];
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
      <NormalSlideContent
        slidePages={slidePages}
        onSlideEndFC={onSlideEndFC}
        animationTimeProps={animationTimeProps}
      />
    );
  } else {
    return (
      <SplitedSlideContent
        slidePages={slidePages}
        animationTimeProps={animationTimeProps}
      />
    );
  }
};

export default SlideContent;
