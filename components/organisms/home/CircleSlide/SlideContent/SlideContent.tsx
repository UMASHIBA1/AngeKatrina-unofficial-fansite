import React, { ReactNode } from "react";
import styled from "styled-components";
import OneSlideContent from "./OneSlideContent";
import NormalSlideWrapper from "./NormalSlideWrapper";

export interface Props {
  animationType: "slide" | "splitedSlide";
  slidePages: ReactNode[];
  animationTimeProps: AnimationTimeProps;
  onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

export interface AnimationTimeProps {
  duration_ms: number;
  delay_ms: number;
}

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
