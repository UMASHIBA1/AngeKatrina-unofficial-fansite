import WhiteCircle from "./WhiteCircle";
import styled, { keyframes } from "styled-components";
import { fadein, fadeout } from "../../../../styles/commonAnimation";
import {
  circleFlashOrder,
  hideScreenCircleFlashOrder,
  disappearHideScreenCircleFlashOrder,
} from "../../../../constants/gatya/animation_order";

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
  
  // NOTE 70%でblurを0pxにしてるのは、そうしないとなぜか画面端でblurが変な風にピカピカ光るから
	70% {
	  transform: translate(calc(100px / 2), 0) scale(${scale * 0.7}) rotate(0deg);
	  filter: blur(0px);
	}
  
	to {
	  transform: translate(calc(100px / 2), 0) scale(${scale}) rotate(0deg);
	  filter: blur(0px);
	}
  `;

const HideScreenCircleFlash = styled(WhiteCircle)<Props>`
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
      ${hideScreenCircleFlashOrder.delay_ms}ms both,
    ${({ isStartAnimation }) => (isStartAnimation ? fadeout : "none")} 0ms
      linear ${disappearHideScreenCircleFlashOrder.delay_ms}ms forwards;
`;

export default HideScreenCircleFlash;
