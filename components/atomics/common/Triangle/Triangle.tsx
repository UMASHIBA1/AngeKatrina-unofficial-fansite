import YellowTriangleImg from "../../../../public/svgs/home/yellow_triangle.svg";
import WhiteTriangleImg from "../../../../public/svgs/home/white_triangle.svg";
import AngeTriangleImg from "../../../../public/svgs/home/ange_triangle_sharp.svg";
import BlackTriangleImg from "../../../../public/svgs/home/black_triangle.svg";
import styled, { css } from "styled-components";
import { multiBoundExpand } from "../../../../styles/commonAnimation";

export interface TriangleProps {
  color: "yellow" | "white" | "ange" | "black";
  animation?: "none" | "boundExpand";
  animationDelayMs?: number;
  width?: string;
  rotate?: string;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
}

const Wrapper = styled.div<Required<Omit<TriangleProps, "color">>>`
  width: ${({ width }) => width};
  transform: rotate(${({ rotate }) => rotate});
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  ${({ animation, animationDelayMs }) =>
    animation === "boundExpand" &&
    css`
      animation: ${multiBoundExpand()} 1500ms both ease-in-out
        ${animationDelayMs}ms;
    `}
`;

const Triangle: React.FC<TriangleProps> = ({
  color,
  animation = "none",
  animationDelayMs = 100,
  width = "100px",
  rotate = "0deg",
  top = "auto",
  left = "auto",
  bottom = "auto",
  right = "auto",
}: TriangleProps) => {
  return (
    <Wrapper
      width={width}
      rotate={rotate}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animation={animation}
      animationDelayMs={animationDelayMs}
    >
      {color === "yellow" ? (
        <YellowTriangleImg />
      ) : color === "white" ? (
        <WhiteTriangleImg />
      ) : color === "black" ? (
        <BlackTriangleImg />
      ) : (
        <AngeTriangleImg />
      )}
    </Wrapper>
  );
};

export default Triangle;
