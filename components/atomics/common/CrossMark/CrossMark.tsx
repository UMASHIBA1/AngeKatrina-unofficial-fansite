import React from "react";
import styled, { css } from "styled-components";
import { RedBlackYellow } from "../../../../typing/Color";

export interface CrossMarkProps {
  color: RedBlackYellow;
  widthHeight?: string;
}

const Wrapper = styled.div<{ widthHeight?: string }>`
  position: relative;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  ${({ widthHeight }) =>
    widthHeight &&
    css`
      width: ${widthHeight};
      height: ${widthHeight};
    `}
  margin: auto;
`;

const Line = styled.div<{ color: RedBlackYellow }>`
  position: absolute;
  top: 0;
  left: calc(50% - 12px);
  width: 24px;
  border-radius: 12px;
  height: 100%;
  background-color: ${({ color }) => color};
  transform-origin: center;

  :first-child {
    transform: rotate(-45deg);
  }

  :nth-child(2) {
    transform: rotate(45deg);
  }
`;

const CrossMark: React.FC<CrossMarkProps> = ({ color, widthHeight }) => {
  return (
    <Wrapper widthHeight={widthHeight}>
      <Line color={color} />
      <Line color={color} />
    </Wrapper>
  );
};

export default CrossMark;
