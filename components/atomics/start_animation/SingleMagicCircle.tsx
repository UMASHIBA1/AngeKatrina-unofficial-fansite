import React from "react";
import styled, { Keyframes, keyframes } from "styled-components";
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

const changeTopLeft = (Diameter: Props["Diameter"]) => keyframes`
  to {
    transform: translate(
      calc(50vw - ${Diameter / 2}px),
      calc(50vh - ${Diameter / 2}px)
    );
  }
`;

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

  const StyledSVG = styled(SvgElement)`
    position: absolute;
  `;

  if (isStartSummonAnimation) {
    return styled(StyledSVG)`
      animation: ${rotateKeyframe} 20s linear infinite,
        ${toDeepDropShadow(3, ANGE_RED)} 500ms linear 400ms forwards,
        ${expand(Diameter * 1.2)} 500ms ease-in 900ms forwards;
    `;
  } else {
    return styled(StyledSVG)`
      animation: ${rotateKeyframe} 20s linear infinite;
    `;
  }
};

const createWrapper = (
  isStartSummonAnimation: Props["isStartSummonAnimation"],
  Diameter: Props["Diameter"]
) => {
  if (!isStartSummonAnimation) {
    return styled.span<{ Diameter: number }>`
      position: absolute;
      transform: translate(
        calc(50vw - ${({ Diameter }) => Diameter / 2}px),
        calc(50vh - ${({ Diameter }) => Diameter / 2}px)
      );
    `;
  } else {
    return styled.span<{ Diameter: number }>`
      position: absolute;
      transform: translate(
        calc(50vw - ${({ Diameter }) => Diameter / 2}px),
        calc(50vh - ${({ Diameter }) => Diameter / 2}px)
      );
      animation: ${changeTopLeft(Diameter * 1.2)} 875ms ease-in 900ms forwards;
    `;
  }
};

const SingleMagicCircle: React.FC<Props> = (props: Props) => {
  const { Diameter, isStartSummonAnimation } = props;

  const AnimateStyledSVG = createAnimateStyledSVG(props);

  const Wrapper = createWrapper(isStartSummonAnimation, Diameter);

  return (
    <Wrapper Diameter={Diameter}>
      <AnimateStyledSVG width={Diameter} height={Diameter} />
    </Wrapper>
  );
};
export default SingleMagicCircle;
