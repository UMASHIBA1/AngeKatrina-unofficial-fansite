import React from "react";
import styled, { Keyframes } from "styled-components";
import {
  rightRotate,
  leftRotate,
  toDeepDropShadow,
} from "../../../styles/commonAnimation";
import { ANGE_RED } from "../../../constants/colors";

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  Diameter: number;
  rotateDirection: "right" | "left";
  isStartSummonAnimation: boolean;
}

const SingleMagicCircle: React.FC<Props> = ({
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

  const StyledSVG = styled(SvgElement)`
    position: absolute;
    left: calc(50% - ${Diameter / 2}px);
    top: calc(50% - ${Diameter / 2}px);
    animation: ${rotateKeyframe} 20s linear infinite,
      ${isStartSummonAnimation ? toDeepDropShadow(5, ANGE_RED) : "none"} 500ms
        linear 400ms forwards;
  `;

  return <StyledSVG width={Diameter} height={Diameter} />;
};
export default SingleMagicCircle;
