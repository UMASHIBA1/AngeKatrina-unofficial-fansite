import styled, { css } from "styled-components";
import { fadein, fadeout, scale } from "../../../../styles/commonAnimation";
import { RedBlackYellow } from "../../../../typing/Color";

export interface RingProps {
  runStartAnimation: boolean;
  widthHeight?: string;
  color: RedBlackYellow;
  animation: "none" | "expand";
  animationDelay?: number;
}

const miniRingAnimationDuration = 500;

const MiniRing = styled.div<Omit<RingProps, "runStartAnimation">>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid ${({ color }) => color} 4px;
  border-radius: 50%;
  box-sizing: border-box;

  ${({ animation, animationDelay }) =>
    animation === "expand" &&
    css`
      transform: scale(0);
      animation: ${fadein()} 1ms linear both ${animationDelay}ms,
        ${scale(1)} ease-in ${miniRingAnimationDuration}ms forwards
          ${animationDelay}ms,
        ${fadeout} ease-in ${miniRingAnimationDuration}ms forwards
          ${animationDelay}ms;
    `}
`;

const RingMain = styled.div<Omit<RingProps, "runStartAnimation">>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid ${({ color }) => color} 8px;
  border-radius: 50%;
  box-sizing: border-box;

  ${({ animation, animationDelay }) =>
    animation === "expand" &&
    css`
      transform: scale(0);
      animation: ${scale(1)} 400ms ease-out forwards ${animationDelay}ms;
    `}
`;

const Wrapper = styled.div<{
  widthHeight: RingProps["widthHeight"];
  runStartAnimation: RingProps["runStartAnimation"];
}>`
  position: relative;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  ${({ widthHeight }) =>
    widthHeight &&
    css`
      width: ${widthHeight};
      height: ${widthHeight};
    `}

  ${({ runStartAnimation }) =>
    !runStartAnimation &&
    css`
      > ${MiniRing}, > ${RingMain} {
        display: none;
      }
    `}
`;

const Ring: React.FC<RingProps> = ({
  animation,
  color,
  widthHeight,
  animationDelay = 100,
  runStartAnimation,
}) => {
  return (
    <Wrapper widthHeight={widthHeight} runStartAnimation={runStartAnimation}>
      <MiniRing
        animation={animation}
        color={color}
        animationDelay={animationDelay}
      />
      <MiniRing
        animation={animation}
        color={color}
        animationDelay={animationDelay + 150}
      />
      <RingMain
        animation={animation}
        color={color}
        widthHeight={widthHeight}
        animationDelay={animationDelay + 100 + miniRingAnimationDuration}
      />
    </Wrapper>
  );
};

export default Ring;
