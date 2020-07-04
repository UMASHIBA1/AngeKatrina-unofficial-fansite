import YellowTriangleImg from "../../../public/svgs/home/yellow_triangle.svg";
import WhiteTriangleImg from "../../../public/svgs/home/white_triangle.svg";
import styled from "styled-components";

interface Props {
  color: "yellow" | "white";
  width?: string;
  rotate?: string;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
}

const Wrapper = styled.div<Required<Omit<Props, "color">>>`
  width: ${({ width }) => width};
  transform: rotate(${({ rotate }) => rotate});
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
`;

const BGTriangle: React.FC<Props> = ({
  color,
  width = "100px",
  rotate = "0deg",
  top = "auto",
  left = "auto",
  bottom = "auto",
  right = "auto",
}: Props) => {
  return (
    <Wrapper
      width={width}
      rotate={rotate}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
    >
      {color === "yellow" ? <YellowTriangleImg /> : <WhiteTriangleImg />}
    </Wrapper>
  );
};

export default BGTriangle;
