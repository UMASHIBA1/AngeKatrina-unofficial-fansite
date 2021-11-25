import YellowTriangleImg from "../../../../public/svgs/common/yellow_triangle.svg";
import WhiteTriangleImg from "../../../../public/svgs/common/white_triangle.svg";
import AngeTriangleImg from "../../../../public/svgs/common/ange_triangle_sharp.svg";
import BlackTriangleImg from "../../../../public/svgs/common/black_triangle.svg";
import RedTriangleImg from "../../../../public/svgs/common/red_triangle.svg";
import styled, { css } from "styled-components";
import { multiBoundExpand } from "../../../../styles/commonAnimation";

export interface TriangleProps {
  color: "yellow" | "white" | "ange" | "black" | "red";
  animation?: "none" | "boundExpand";
  animationDelayMs?: number;
  width?: string;
  rotate?: string;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
}

const Wrapper = styled.div<Required<Omit<TriangleProps, "color" | "rotate">>>`
  width: ${({ width }) => width};
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

const RotateWrapper = styled.div<Required<Pick<TriangleProps, "rotate">>>`
  transform: rotate(${({ rotate }) => rotate});
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
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animation={animation}
      animationDelayMs={animationDelayMs}
    >
      <RotateWrapper rotate={rotate}>
        {color === "yellow" ? (
          <YellowTriangleImg />
        ) : color === "white" ? (
          <WhiteTriangleImg />
        ) : color === "black" ? (
          <BlackTriangleImg />
        ) : color === "red" ? (
          <RedTriangleImg />
        ) : (
          <AngeTriangleImg />
        )}
      </RotateWrapper>
    </Wrapper>
  );
};

export default Triangle;
