import React from "react";
import styled, { Keyframes } from "styled-components";
import {
  rightRotate,
  leftRotate,
  toDeepDropShadow,
  expand,
} from "../../../styles/commonAnimation";
import { ANGE_RED } from "../../../constants/colors";

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  Diameter: number;
  rotateDirection: "right" | "left";
  isStartSummonAnimation: boolean;
}

const createAnimateStyledSVG = ({
  SvgElement,
  Diameter,
  rotateDirection,
  isStartSummonAnimation,
}: Props) => {
  let rotateKeyframe: Keyframes;
  if (rotateDirection === "right") {
    rotateKeyframe = rightRotate;
  } else {
    rotateKeyframe = leftRotate;
  }

  let StyledSVG = styled(SvgElement)`
    position: absolute;
  `;

  if (isStartSummonAnimation) {
    StyledSVG = styled(StyledSVG)`
      animation: ${toDeepDropShadow(3, ANGE_RED)} 500ms linear 400ms forwards,
        ${expand(Diameter * 1.2)} 500ms ease-in 900ms forwards;
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
  const { Diameter, rotateDirection } = props;

  const RotateWrapper = createRotateWrapper(rotateDirection);

  const AnimateStyledSVG = createAnimateStyledSVG(props);

  return (
    <Wrapper>
      <RotateWrapper>
        <AnimateStyledSVG width={Diameter} height={Diameter} />
      </RotateWrapper>
    </Wrapper>
  );
};
export default SingleMagicCircle;
