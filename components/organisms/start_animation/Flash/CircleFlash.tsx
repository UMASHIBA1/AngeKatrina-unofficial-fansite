import React from "react";
import styled, { keyframes } from "styled-components";
import WhiteCircleSVG from "../../../../public/start_animation/svgs/white_circle.svg";
import { fadein } from "../../../../styles/commonAnimation";
import { circleFlashOrder } from "../../../../constants/start_animation/animation_order";

interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
}

const circleFlashAnimation = (scale: Props["scale"]) => keyframes`
  from {
    transform: translate(calc(100px / 2), 0) scale(0.0001) rotate(0deg);
  }

  to {
    transform: translate(calc(100px / 2), 0) scale(${scale}) rotate(0deg);
  }
`;

const WhiteCircle: React.FC<Props> = ({
  isStartAnimation,
  blur,
  scale,
  ...props
}: Props) => {
  return <WhiteCircleSVG {...props} />;
};

const CircleFlash = styled(WhiteCircle)<Props>`
  position: absolute;
  width: 100px;
  height: 100px;

  filter: blur(${({ blur }) => blur});
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms ease-out ${circleFlashOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, scale }) =>
        isStartAnimation ? circleFlashAnimation(scale) : "none"}
      ${circleFlashOrder.duration_ms}ms ease-out ${circleFlashOrder.delay_ms}ms
      both;
`;

export default CircleFlash;
