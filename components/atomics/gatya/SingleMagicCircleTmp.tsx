import React from "react";
import styled, { css } from "styled-components";
import { ANGE_RED } from "../../../constants/colors";
import {
  magicCircleDropShadowOrder,
  magicCircleExpandOrder,
  magicCircleRemoveDropShadowOrder,
  magicCricleFadeoutOrder,
} from "../../../constants/gatya/animation_order";
import {
  fadeout,
  removeDeepDropShadow,
  scale,
  toDeepDropShadow,
  rightRotate,
  leftRotate,
} from "../../../styles/commonAnimation";
import mostIn from "../../../public/imgs/gatya/most_in.png";
import secondIn from "../../../public/imgs/gatya/second_in.png";
import thirdIn from "../../../public/imgs/gatya/third_in.png";
import fourthIn from "../../../public/imgs/gatya/fourth_in.png";

interface Animations {
  doShadow: boolean;
  doExpand: boolean;
  doFadeout: boolean;
}

const AvailableSVGs = {
  mostIn: mostIn,
  secondIn: secondIn,
  thirdIn: thirdIn,
  fourthIn: fourthIn,
};

interface Props {
  svgName: keyof typeof AvailableSVGs;
  diameter: number;
  rotateDirection: "right" | "left";
  isStartSummonAnimation: boolean;
  doAnimations: Animations;
  scaleMagnification?: number;
}

const circleCSS = css<{ diameter: Props["diameter"] }>`
  position: absolute;
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
`;

const circleAnimationCSS = css<
  Pick<Props, "isStartSummonAnimation" | "scaleMagnification" | "doAnimations">
>`
  animation: ${({ isStartSummonAnimation, doAnimations: { doShadow } }) =>
        isStartSummonAnimation && doShadow
          ? toDeepDropShadow(4, ANGE_RED)
          : "none"}
      ${magicCircleDropShadowOrder.duration_ms}ms linear
      ${magicCircleDropShadowOrder.delay_ms}ms forwards,
    ${({ isStartSummonAnimation, doAnimations: { doShadow } }) =>
        isStartSummonAnimation && doShadow
          ? removeDeepDropShadow(4, ANGE_RED)
          : "none"}
      ${magicCircleRemoveDropShadowOrder.duration_ms}ms linear
      ${magicCircleRemoveDropShadowOrder.delay_ms}ms forwards,
    ${({
        isStartSummonAnimation,
        doAnimations: { doExpand },
        scaleMagnification,
      }) =>
        isStartSummonAnimation && doExpand && scaleMagnification !== undefined
          ? scale(scaleMagnification)
          : "none"}
      ${magicCircleExpandOrder.duration_ms}ms ease-out
      ${magicCircleExpandOrder.delay_ms}ms forwards,
    forwards,
    ${({ isStartSummonAnimation, doAnimations: { doFadeout } }) =>
        isStartSummonAnimation && doFadeout ? fadeout : "none"}
      ${magicCricleFadeoutOrder.duration_ms}ms linear
      ${magicCricleFadeoutOrder.delay_ms}ms forwards;
`;

const judgeRotateKeyframe = (rotateDirection: Props["rotateDirection"]) => {
  if (rotateDirection === "right") {
    return rightRotate();
  } else {
    return leftRotate();
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

const RotateWrapper = styled.div<{ rotateDirection: Props["rotateDirection"] }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ rotateDirection }) => judgeRotateKeyframe(rotateDirection)}
    20s linear infinite;
`;

const Img = styled.img<Props>`
  ${circleCSS}
  ${circleAnimationCSS}
`;

const SingleMagicCircle: React.VFC<Props> = (props) => {
  const { rotateDirection, svgName } = props;
  let usingImg;
  switch (svgName) {
    case "mostIn":
      usingImg = mostIn;
      break;
    case "secondIn":
      usingImg = secondIn;
      break;
    case "thirdIn":
      usingImg = thirdIn;
      break;
    case "fourthIn":
      usingImg = fourthIn;
  }
  return (
    <Wrapper>
      <RotateWrapper rotateDirection={rotateDirection}>
        <Img {...props} src={usingImg} alt="錬成陣の構成要素" />
      </RotateWrapper>
    </Wrapper>
  );
};

export default SingleMagicCircle;
