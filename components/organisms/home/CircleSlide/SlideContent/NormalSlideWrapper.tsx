import React, { ReactNode } from "react";
import styled from "styled-components";
import { AnimationTimeProps } from "./SlideContent";
import slideAnimation from "./slideAnimation";

interface Props {
  slideNum: number;
  animationTimeProps: AnimationTimeProps;
  children: ReactNode;
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

const NormalSlideWrapper: React.FC<Props> = (props: Props) => {
  return (
    <SlideWrapper
      slideNum={props.slideNum}
      animationTimeProps={props.animationTimeProps}
      onAnimationEnd={props.onSlideEndFC}
    >
      {props.children}
    </SlideWrapper>
  );
};

export default NormalSlideWrapper;
