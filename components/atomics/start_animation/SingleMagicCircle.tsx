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

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleMagicCircle: React.FC<Props> = (props: Props) => {
  const { Diameter } = props;

  const AnimateStyledSVG = createAnimateStyledSVG(props);

  return (
    <Wrapper>
      <AnimateStyledSVG width={Diameter} height={Diameter} />
    </Wrapper>
  );
};
export default SingleMagicCircle;
