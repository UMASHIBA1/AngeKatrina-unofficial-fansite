import React from "react";
import styled, { Keyframes } from "styled-components";
import {
  rightRotate,
  leftRotate,
  toDeepDropShadow,
  scale,
  fadeout,
  removeDeepDropShadow,
} from "../../../styles/commonAnimation";
import { ANGE_RED } from "../../../constants/colors";
import {
  magicCircleDropShadowOrder,
  magicCircleRemoveDropShadowOrder,
  magicCricleFadeoutOrder,
  magicCircleExpandOrder,
} from "../../../constants/start_animation/animation_order";

interface Animations {
  doShadow: boolean;
  doExpand: boolean;
  doFadeout: boolean;
}

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  diameter: number;
  rotateDirection: "right" | "left";
  isStartSummonAnimation: boolean;
  doAnimations: Animations;
  scaleMagnification?: number;
}

const createAnimateStyledSVG = ({
  SvgElement,
  isStartSummonAnimation,
  scaleMagnification,
  doAnimations: { doShadow, doExpand, doFadeout },
}: Props) => {
  let StyledSVG = styled(SvgElement)`
    position: absolute;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
  `;

  if (isStartSummonAnimation) {
    StyledSVG = styled(StyledSVG)`
      will-change: animation;
      animation: ${doShadow ? toDeepDropShadow(4, ANGE_RED) : "none"}
          ${magicCircleDropShadowOrder.duration}ms linear
          ${magicCircleDropShadowOrder.delay}ms forwards,
        ${doShadow ? removeDeepDropShadow(4, ANGE_RED) : "none"}
          ${magicCircleRemoveDropShadowOrder.duration}ms linear
          ${magicCircleRemoveDropShadowOrder.delay}ms forwards,
        ${doExpand && scaleMagnification !== undefined
            ? scale(scaleMagnification)
            : "none"}
          ${magicCircleExpandOrder.duration}ms ease-out
          ${magicCircleExpandOrder.delay}ms forwards,
        forwards,
        ${doFadeout ? fadeout : "none"} ${magicCricleFadeoutOrder.duration}ms
          linear ${magicCricleFadeoutOrder.delay}ms forwards;
    `;
  } else {
    // NOTE styledの中でReactHooksを使っているのかこの処理を加えないと「前と同じ回数のReactHooksを使え」ってエラーをReactがだす
    StyledSVG = styled(StyledSVG)`
      animation: none;
    `;
  }

  return StyledSVG;
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const createRotateWrapper = (rotateDirection: Props["rotateDirection"]) => {
  let rotateKeyframe: Keyframes;
  if (rotateDirection === "right") {
    rotateKeyframe = rightRotate;
  } else {
    rotateKeyframe = leftRotate;
  }

  return styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${rotateKeyframe} 20s linear infinite;
  `;
};

const SingleMagicCircle: React.FC<Props> = (props: Props) => {
  const { diameter, rotateDirection } = props;

  const RotateWrapper = createRotateWrapper(rotateDirection);

  const AnimateStyledSVG = createAnimateStyledSVG(props);

  return (
    <Wrapper>
      <RotateWrapper>
        <AnimateStyledSVG width={diameter} height={diameter} />
      </RotateWrapper>
    </Wrapper>
  );
};
export default SingleMagicCircle;
