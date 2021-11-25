import React from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import CrossMark from "../../../atomics/common/CrossMark/CrossMark";

interface Props {
  runStartAnimation: boolean;
}

const gridOrders = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 2],
  [2, 3],
  [3, 3],
];

const crossMarkWidthHeight = "80%";

const crossMarkDelay = 600;

const crossMarkAnimation = "expandRotate";

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  top: 0;
  right: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 20vw;
  height: 20vw;
  ${gridOrders.map(([row, column], i) => {
    return css`
      > div {
        :nth-child(${i + 1}) {
          grid-row: ${row};
          grid-column: ${column};
        }
      }
    `;
  })}
`;

const NavBarCrossMarks: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper>
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay}
        color={ANGE_BLACK}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay + 100}
        color={ANGE_YELLOW}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay + 200}
        color={ANGE_RED}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay + 300}
        color={ANGE_RED}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay + 400}
        color={ANGE_YELLOW}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
      <CrossMark
        runStartAnimation={runStartAnimation}
        animationDelay={crossMarkDelay + 500}
        color={ANGE_BLACK}
        animation={crossMarkAnimation}
        widthHeight={crossMarkWidthHeight}
      />
    </Wrapper>
  );
};

export default NavBarCrossMarks;
