import React from "react";
import styled, { css } from "styled-components";
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
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";

interface Animations {
  doShadow: boolean;
  doExpand: boolean;
  doFadeout: boolean;
}

const AvailableSVGs = {
  mostIn: MostIn,
  secondIn: SecondIn,
  thirdIn: ThirdIn,
  fourthIn: FourthIn,
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
  will-change: animation;
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

// NOTE styled-componentsで要素にstyleを付与するのにコンポーネント化が必要だったが
// MostInComponentみたいにいちいち定義してコンポーネント化するのが面倒だったのでカリーを使用
const SVGWrap = (
  SVGElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>
): React.FC<Props> => {
  return ({
    svgName,
    diameter,
    rotateDirection,
    isStartSummonAnimation,
    doAnimations,
    scaleMagnification,
    ...props
  }: Props) => <SVGElement {...props} />;
};

const StyledMostIn = styled(SVGWrap(MostIn))`
  ${circleCSS}
  ${circleAnimationCSS}
`;
const StyledSecondIn = styled(SVGWrap(SecondIn))`
  ${circleCSS}
  ${circleAnimationCSS}
`;
const StyledThirdIn = styled(SVGWrap(ThirdIn))`
  ${circleCSS}
  ${circleAnimationCSS}
`;
const StyledFourthIn = styled(SVGWrap(FourthIn))`
  ${circleCSS}
  ${circleAnimationCSS}
`;

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
  const { rotateDirection, svgName } = props;

  let AnimateStyledSVG;
  switch (svgName) {
    case "mostIn":
      AnimateStyledSVG = StyledMostIn;
      break;
    case "secondIn":
      AnimateStyledSVG = StyledSecondIn;
      break;
    case "thirdIn":
      AnimateStyledSVG = StyledThirdIn;
      break;
    case "fourthIn":
      AnimateStyledSVG = StyledFourthIn;
  }

  return (
    <Wrapper>
      <RotateWrapper rotateDirection={rotateDirection}>
        <AnimateStyledSVG {...props} />
      </RotateWrapper>
    </Wrapper>
  );
};
export default SingleMagicCircle;
