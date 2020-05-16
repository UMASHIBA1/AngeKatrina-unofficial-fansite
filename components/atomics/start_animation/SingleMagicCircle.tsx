import React from "react";
import styled, { Keyframes } from "styled-components";
import { rightRotate, leftRotate } from "../../../styles/commonAnimation";

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  Diameter: number;
  rotateDirection: "right" | "left";
}

const SingleMagicCircle: React.FC<Props> = ({
  SvgElement,
  Diameter,
  rotateDirection,
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
    animation: ${rotateKeyframe} 20s linear infinite;
  `;

  return <StyledSVG width={Diameter} height={Diameter} />;
};
export default SingleMagicCircle;
