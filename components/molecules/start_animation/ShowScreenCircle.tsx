import styled, { keyframes } from "styled-components";
import WhiteCircle from "../../atomics/start_animation/WhiteCircle";
import { fadein } from "../../../styles/commonAnimation";
import { showAngeCardOrder } from "../../../constants/start_animation/animation_order";

interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
}

const showScreenCircleAnimation = (
  scale: Props["scale"],
  blur: Props["blur"]
) => keyframes`
  0% {
	transform: translate(calc(-100px / 2), calc(-100px / 2)) scale(${scale}) rotate(0deg);
	filter: blur(0px);
  }

  100% {
	  transform: translate(calc(-100px / 2), calc(-100px / 2)) scale(0.0001) rotate(0deg);
	  filter: blur(0px);
  }
`;

const ShowScreenCircle = styled(WhiteCircle)<Props>`
  position: absolute;
  width: 100px;
  height: 100px;
  filter: blur(${({ blur }) => blur});
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms ease-out ${showAngeCardOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, scale, blur }) =>
        isStartAnimation ? showScreenCircleAnimation(scale, blur) : "none"}
      ${showAngeCardOrder.duration_ms}ms linear ${showAngeCardOrder.delay_ms}ms
      forwards;
`;
export default ShowScreenCircle;
