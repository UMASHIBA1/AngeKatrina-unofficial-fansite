import WhiteCircle from "../../atomics/start_animation/WhiteCircle";
import styled, { keyframes } from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import {
  circleFlashOrder,
  hideScreenCircleFlashOrder,
} from "../../../constants/start_animation/animation_order";

interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
}

const hideScreenCircleAnimation = (
  scale: Props["scale"],
  blur: Props["blur"]
) => keyframes`
	0% {
	  transform: translate(calc(100px / 2), 0) scale(0.0001) rotate(0deg);
	  filter: blur(${blur});
	}
  
	70% {
	  transform: translate(calc(100px / 2), 0) scale(${scale * 0.7}) rotate(0deg);
	  filter: blur(0px);
	}
  
	to {
	  transform: translate(calc(100px / 2), 0) scale(${scale}) rotate(0deg);
	  filter: blur(0px);
	}
  `;

const HideScreenCircleFlash = styled(WhiteCircle)<
  Props & { additionalDelayTime: number }
>`
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms ease-out ${circleFlashOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, blur }) =>
        isStartAnimation
          ? hideScreenCircleAnimation(
              (Math.max(window.innerWidth, window.innerHeight) / 100) * 3.0,
              blur
            )
          : "none"}
      ${hideScreenCircleFlashOrder.duration_ms}ms ease-out
      ${({ additionalDelayTime }) =>
        hideScreenCircleFlashOrder.delay_ms + additionalDelayTime}ms
      both;
`;

export default HideScreenCircleFlash;
