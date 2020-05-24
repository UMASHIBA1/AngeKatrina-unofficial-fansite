import React from "react";
import styled from "styled-components";
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
  if (isStartSummonAnimation) {
    return styled(SvgElement)`
      position: absolute;
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
      will-change: animation;
      animation: ${doShadow ? toDeepDropShadow(4, ANGE_RED) : "none"}
          ${magicCircleDropShadowOrder.duration_ms}ms linear
          ${magicCircleDropShadowOrder.delay_ms}ms forwards,
        ${doShadow ? removeDeepDropShadow(4, ANGE_RED) : "none"}
          ${magicCircleRemoveDropShadowOrder.duration_ms}ms linear
          ${magicCircleRemoveDropShadowOrder.delay_ms}ms forwards,
        ${doExpand && scaleMagnification !== undefined
            ? scale(scaleMagnification)
            : "none"}
          ${magicCircleExpandOrder.duration_ms}ms ease-out
          ${magicCircleExpandOrder.delay_ms}ms forwards,
        forwards,
        ${doFadeout ? fadeout : "none"} ${magicCricleFadeoutOrder.duration_ms}ms
          linear ${magicCricleFadeoutOrder.delay_ms}ms forwards;
    `;
  } else {
    return styled(SvgElement)`
      position: absolute;
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
      animation: none;
    `;
  }
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const judgeRotateKeyframe = (rotateDirection: Props["rotateDirection"]) => {
  if (rotateDirection === "right") {
    return rightRotate();
  } else {
    return leftRotate();
  }
};

const RotateWrapper = styled.div<{ rotateDirection: Props["rotateDirection"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ rotateDirection }) => judgeRotateKeyframe(rotateDirection)}
    20s linear infinite;
`;

const SingleMagicCircle: React.FC<Props> = (props: Props) => {
  const { diameter, rotateDirection } = props;

  const AnimateStyledSVG = createAnimateStyledSVG(props);

  return (
    <Wrapper>
      <RotateWrapper rotateDirection={rotateDirection}>
        <AnimateStyledSVG width={diameter} height={diameter} />
      </RotateWrapper>
    </Wrapper>
  );
};
export default SingleMagicCircle;
