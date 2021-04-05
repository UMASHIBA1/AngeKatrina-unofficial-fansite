import styled, { css } from "styled-components";
import { RedBlackYellow } from "../../../../typing/Color";

export interface RingProps {
  widthHeight?: string;
  color: RedBlackYellow;
}

const Ring = styled.div<RingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: solid ${({ color }) => color} 8px;
  border-radius: 50%;

  ${({ widthHeight, color }) =>
    widthHeight &&
    css`
      width: ${widthHeight};
      height: ${widthHeight};
      border: solid ${color} calc(${widthHeight} / 15);
    `}
`;

export default Ring;
