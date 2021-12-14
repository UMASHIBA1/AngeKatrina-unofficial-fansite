import React from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../../../constants/colors";
import { translate } from "../../../../../../styles/commonAnimation";
import { RedBlackYellow } from "../../../../../../typing/Color";

const threeSlashesBaseDelayMs = 600;

interface Props {
  runStartAnimation: boolean;
}

const Line = styled.div<{
  color: RedBlackYellow;
  delayMs: number;
  runStartAnimation: boolean;
}>`
  width: 20px;
  height: 140%;
  background-color: ${({ color }) => color};
  margin: 0 6px;
  ${({ runStartAnimation, delayMs }) =>
    runStartAnimation &&
    css`
      animation: ${translate({ x: 0, y: "-100%" }, { x: 0, y: 0 })} 300ms
        ease-out both ${delayMs + threeSlashesBaseDelayMs}ms;
    `}
`;

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: rotate(24deg);
  ${({ runStartAnimation }) =>
    !runStartAnimation &&
    css`
      display: none;
    `}
`;

const ThreeSlashes: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      <Line
        color={ANGE_RED}
        delayMs={300}
        runStartAnimation={runStartAnimation}
      />
      <Line
        color={ANGE_YELLOW}
        delayMs={200}
        runStartAnimation={runStartAnimation}
      />
      <Line
        color={ANGE_BLACK}
        delayMs={100}
        runStartAnimation={runStartAnimation}
      />
    </Wrapper>
  );
};

export default ThreeSlashes;
