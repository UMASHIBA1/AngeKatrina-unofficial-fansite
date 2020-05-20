import React from "react";
import styled, { Keyframes } from "styled-components";
import {
  rightRotate,
  leftRotate,
  toDeepDropShadow,
  scale,
} from "../../../styles/commonAnimation";
import { ANGE_RED } from "../../../constants/colors";

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  diameter: number;
  rotateDirection: "right" | "left";
  isStartSummonAnimation: boolean;
  scaleMagnification?: number;
}

const createAnimateStyledSVG = ({
  SvgElement,
  isStartSummonAnimation,
  scaleMagnification,
}: Props) => {
  let StyledSVG = styled(SvgElement)`
    position: absolute;
    will-change: animation;
  `;

  if (isStartSummonAnimation) {
    if (scaleMagnification !== undefined) {
      StyledSVG = styled(StyledSVG)`
        animation: ${toDeepDropShadow(3, ANGE_RED)} 500ms linear 400ms forwards,
          ${scale(scaleMagnification)} 300ms ease-out 1600ms forwards;
      `;
    } else {
      StyledSVG = styled(StyledSVG)`
        animation: ${toDeepDropShadow(3, ANGE_RED)} 500ms linear 400ms forwards;
      `;
    }
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
