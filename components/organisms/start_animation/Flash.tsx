import React from "react";
import styled, { keyframes } from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import {
  circleFlashOrder,
  lineFlashOrder,
  hideScreenCircleFlashOrder,
} from "../../../constants/start_animation/animation_order";
import { flashZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import FlashLineSVG from "../../../public/start_animation/svgs/flash_line.svg";
import WhiteCircleSVG from "../../../public/start_animation/svgs/white_circle.svg";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) => (isStartAnimation ? flashZIndex : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

interface SVGProps {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
}

const WhiteCircle: React.FC<SVGProps> = ({
  isStartAnimation,
  blur,
  scale,
  ...props
}: SVGProps) => {
  return <WhiteCircleSVG {...props} />;
};

type LineFlashProps = SVGProps & { rotate?: string; top?: string };

const FlashLine: React.FC<LineFlashProps> = ({
  isStartAnimation,
  blur,
  rotate,
  top,
  scale,
  ...props
}: LineFlashProps) => {
  return <FlashLineSVG {...props} />;
};

const lineFlashAnimation = ({
  top = "0",
  scale,
  rotate = "0deg",
}: Pick<LineFlashProps, "top" | "scale" | "rotate">) => keyframes`
  from {
    transform: translate(calc(100px / 2), ${top}) scale(0.0001) rotate(${rotate});
  }

  to {
    transform: translate(calc(100px / 2), ${top}) scale(${scale}) rotate(${rotate});
  }
`;

const circleFlashAnimation = (scale: LineFlashProps["scale"]) => keyframes`
  from {
    transform: translate(calc(100px / 2), 0) scale(0.0001) rotate(0deg);
  }

  to {
    transform: translate(calc(100px / 2), 0) scale(${scale}) rotate(0deg);
  }
`;

const hideScreenCircleAnimation = (
  scale: LineFlashProps["scale"],
  blur: LineFlashProps["blur"]
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

const LineFlash = styled(FlashLine)<LineFlashProps>`
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

const CircleFlash = styled(WhiteCircle)<SVGProps>`
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

const HideScreenCircleFlash = styled(WhiteCircle)<
  SVGProps & { additionalDelayTime: number }
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

const Flash: React.FC = () => {
  const [
    size,
    isStartAnimation,
  ] = useTypedSelector(({ isStartSummonAnimation, sizes }) => [
    sizes,
    isStartSummonAnimation,
  ]);

  let deepCircleFlashScaleBase;
  if (size === "sm") {
    deepCircleFlashScaleBase = (sm_breakpoint / 100) * 1.5;
  } else if (size === "tablet") {
    deepCircleFlashScaleBase = (tablet_breakpoint / 100) * 1.5;
  } else {
    // 画面サイズ1920までの対応なので 1920px / 100px * 1.5(大体ルート2) = 大体29
    deepCircleFlashScaleBase = 29;
  }

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <LineFlash isStartAnimation={isStartAnimation} scale={10} blur="1px" />
      <LineFlash
        isStartAnimation={isStartAnimation}
        scale={8}
        blur="1px"
        rotate="40deg"
        top="-70px"
      />
      <LineFlash
        isStartAnimation={isStartAnimation}
        scale={5.5}
        blur="1px"
        rotate="-60deg"
        top="60px"
      />
      <CircleFlash isStartAnimation={isStartAnimation} scale={3} blur="20px" />
      <CircleFlash isStartAnimation={isStartAnimation} scale={3} blur="100px" />
      <CircleFlash isStartAnimation={isStartAnimation} scale={2} blur="25px" />
      <HideScreenCircleFlash
        isStartAnimation={isStartAnimation}
        scale={deepCircleFlashScaleBase}
        blur="6px"
        additionalDelayTime={0}
      />
    </Wrapper>
  );
};

export default Flash;
