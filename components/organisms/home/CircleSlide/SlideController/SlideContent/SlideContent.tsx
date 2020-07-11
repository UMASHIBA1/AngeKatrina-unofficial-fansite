import React from "react";
import NormalSlideContent from "./NormalSlideContent/NormalSlideContent";
import SplitedSlideContent from "./SplitedSlideContent/SplitedSlideContent";
import ContentDataType from "./contentDatas/ContentDataType";

export interface AnimationTimeProps {
  duration_ms: number;
  delay_ms: number;
}

type Props = Omit<ContentDataType, "animationDuration_ms"> & {
  onSlideEndFC: (event: React.AnimationEvent<HTMLDivElement>) => void;
  animationTimeProps: AnimationTimeProps;
};

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
