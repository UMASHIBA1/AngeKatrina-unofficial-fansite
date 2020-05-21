import React from "react";
import styled, { Keyframes } from "styled-components";
import {
  rightRotate,
  leftRotate,
  toDeepDropShadow,
  scale,
  fadeout,
} from "../../../styles/commonAnimation";
import { ANGE_RED } from "../../../constants/colors";

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
    will-change: animation;
  `;

  if (isStartSummonAnimation) {
    StyledSVG = styled(StyledSVG)`
      animation: ${doShadow ? toDeepDropShadow(3, ANGE_RED) : "none"} 500ms
          linear 400ms forwards,
        ${doExpand && scaleMagnification !== undefined
            ? scale(scaleMagnification)
            : "none"}
          300ms ease-out 1600ms forwards,
        ${doFadeout ? fadeout : "none"} 500ms linear 400ms forwards;
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
