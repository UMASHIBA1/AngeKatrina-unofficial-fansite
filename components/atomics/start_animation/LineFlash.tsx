import React from "react";
import styled, { keyframes } from "styled-components";
import FlashLineSVG from "../../../public/start_animation/svgs/flash_line.svg";
import { lineFlashOrder } from "../../../constants/start_animation/animation_order";
import { fadein } from "../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
  rotate?: string;
  top?: string;
}

const lineFlashAnimation = ({
  top = "0",
  scale,
  rotate = "0deg",
}: Pick<Props, "top" | "scale" | "rotate">) => keyframes`
	from {
	  transform: translate(calc(100px / 2), ${top}) scale(0.0001) rotate(${rotate});
	}
  
	to {
	  transform: translate(calc(100px / 2), ${top}) scale(${scale}) rotate(${rotate});
	}
  `;

const FlashLine: React.FC<Props> = ({
  isStartAnimation,
  blur,
  rotate,
  top,
  scale,
  ...props
}: Props) => {
  return <FlashLineSVG {...props} />;
};

const LineFlash = styled(FlashLine)<Props>`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: translate(
      calc(100px / 2),
      ${({ top }) => (top !== undefined ? top : "0")}
    )
    scale(${({ scale }) => scale})
    rotate(${({ rotate }) => (rotate !== undefined ? rotate : "0deg")});
  filter: blur(${({ blur }) => blur});
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms ease-out ${lineFlashOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, scale, rotate, top }) =>
        isStartAnimation ? lineFlashAnimation({ scale, rotate, top }) : "none"}
      ${lineFlashOrder.duration_ms}ms ease-out ${lineFlashOrder.delay_ms}ms both;
`;

export default LineFlash;
