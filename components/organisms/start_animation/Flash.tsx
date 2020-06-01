import React from "react";
import styled, { keyframes } from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import { flashOrder } from "../../../constants/start_animation/animation_order";
import { flashZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import FlashLineSVG from '../../../public/start_animation/svgs/flash_line.svg';
import WhiteCircleSVG from '../../../public/start_animation/svgs/white_circle.svg';

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

const WhiteCircle: React.FC<SVGProps> = ({isStartAnimation, blur, scale, ...props}:SVGProps) => {
  return (
    <WhiteCircleSVG {...props} />
  )
}

type LineFlashProps = SVGProps & {rotate?: string, top?: string}

const FlashLine: React.FC<LineFlashProps> = ({
  isStartAnimation, blur, rotate, top, scale, ...props
}: LineFlashProps) => {
  return (
    <FlashLineSVG {...props} />
  );
}

const lineFlashAnimation = ({top = "0", scale, rotate="0deg"}: Pick<LineFlashProps, "top" | "scale" | "rotate">) => keyframes`
  from {
    transform: translate(calc(100px / 2), ${top}) scale(0.0001) rotate(${rotate});
  }

  to {
    transform: translate(calc(100px / 2), ${top}) scale(${scale}) rotate(${rotate});
  }
`;

const LineFlash = styled(FlashLine)<LineFlashProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: translate(calc(100px / 2), ${({top}) => top!==undefined?top: "0"}) scale(${({scale})=>scale}) rotate(${({rotate}) => rotate!==undefined?rotate:"0deg"});
  filter: blur(${({ blur }) => blur});
  opacity: 0;
  animation: ${({ isStartAnimation }) => isStartAnimation ? fadein() : "none"} 0ms ease-out ${flashOrder.delay_ms}ms forwards, ${({isStartAnimation,scale, rotate, top })=>isStartAnimation?lineFlashAnimation({scale, rotate, top}): "none"} ${flashOrder.duration_ms}ms ease-out ${flashOrder.delay_ms}ms both;
`;

const CircleFlash = styled(WhiteCircle)<SVGProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: translate(calc(100px / 2), 0) scale(${({scale})=>scale}) rotate(0deg);
  filter: blur(${({ blur }) => blur});
  opacity: 0;
  animation: ${({ isStartAnimation }) => isStartAnimation ? fadein() : "none"} 0ms ease-out ${flashOrder.delay_ms}ms forwards;
`

const Flash: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <LineFlash
        isStartAnimation={isStartAnimation}
        scale={10}
        blur="1px"
      />
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
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        scale={3}
        blur="20px"
      />
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        scale={3}
        blur="100px"
      />
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        scale={2}
        blur="25px"
      />
    </Wrapper>
  );
};

export default Flash;
