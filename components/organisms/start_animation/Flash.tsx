import React from "react";
import styled from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import { flashOrder } from "../../../constants/start_animation/animation_order";
import { flashZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";
import FlashLineSVG from '../../../public/start_animation/svgs/flash_line.svg';
import WhiteCircle from '../../../public/start_animation/svgs/white_circle.svg';

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
  diameter: string;
  blur: string;
}

const StarSVG: React.FC<SVGProps> = ({
  isStartAnimation, diameter, blur, ...props
}: SVGProps) => {
  return (
    <FlashLineSVG {...props} />
  );
}

type LineFlashProps = SVGProps & {rotate?: string, top?: string}


const LineFlash = styled(StarSVG)<LineFlashProps>`
  position: absolute;
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  transform: translate(calc(${({ diameter }) => diameter} / 2), ${({top}) => top!==undefined?top: "0"}) rotate(${({rotate}) => rotate!==undefined?rotate:"0deg"});
  filter: blur(${({ blur }) => blur});
//   animation: ${({ isStartAnimation }) =>
  isStartAnimation ? fadein() : "none"}
//     ${flashOrder.duration_ms}ms ease-out ${flashOrder.delay_ms}ms forwards;
`;

const CircleFlash = styled(WhiteCircle)<SVGProps>`
  position: absolute;
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  transform: translate(calc(${({ diameter }) => diameter} / 2 + ${({diameter}) => diameter} / 6), 0) rotate(0deg);
  filter: blur(${({ blur }) => blur});
  //   animation: ${({ isStartAnimation }) =>
  isStartAnimation ? fadein() : "none"}
  //     ${flashOrder.duration_ms}ms ease-out ${flashOrder.delay_ms}ms forwards;
`

const Flash: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <LineFlash
        isStartAnimation={isStartAnimation}
        diameter="1000px"
        blur="10px"
      />
      <LineFlash
        isStartAnimation={isStartAnimation}
        diameter="800px"
        blur="15px"
        rotate="40deg"
        top="-70px"
      />
      <LineFlash
        isStartAnimation={isStartAnimation}
        diameter="550px"
        blur="15px"
        rotate="-60deg"
        top="60px"
      />
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        diameter="300px"
        blur="60px"
      />
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        diameter="300px"
        blur="300px"
      />
      <CircleFlash 
        isStartAnimation={isStartAnimation}
        diameter="200px"
        blur="50px"
      />
    </Wrapper>
  );
};

export default Flash;
