import React from "react";
import NormalSlideContent from "./NormalSlideContent/NormalSlideContent";
import SplitedSlideContent from "./SplitedSlideContent/SplitedSlideContent";
import ContentDataType from "./contentDatas/ContentDataType";
import AnimationProps from "../../../../../../typing/AnimationProps";

type Props = Omit<ContentDataType, "animationDuration_ms"> & {
  onSlideEndFC: (event: React.AnimationEvent<HTMLDivElement>) => void;
  animationTimeProps: AnimationProps;
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
        onSlideEndFC={onSlideEndFC}
        animationTimeProps={animationTimeProps}
      />
    );
  }
};

export default SlideContent;
