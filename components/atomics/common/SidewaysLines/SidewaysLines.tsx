import React from "react";
import styled, { css } from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import { RedBlackYellow } from "../../../../typing/Color";

export interface SidewaysLinesProps {
  animation: "none" | "slideFadein";
  pattern: "leftRightCenter" | "rightCenterLeft" | "centerLeftRight";
}

const Line = styled.div<{ color: RedBlackYellow }>`
  height: 12px;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ color }) => color};
  margin: 6px;
`;

const Wrapper = styled.div<SidewaysLinesProps>`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  > ${Line} {
    position: relative;
    ${({ pattern }) =>
      pattern === "rightCenterLeft" &&
      css`
        :nth-child(1) {
          top: 0;
          right: -24%;
        }

        :nth-child(2) {
          top: 0;
          left: 0;
        }

        :nth-child(3) {
          top: 0;
          left: -24%;
        }
      `}

    ${({ pattern }) =>
      pattern === "leftRightCenter" &&
      css`
        :nth-child(1) {
          top: 0;
          left: -24%;
        }

        :nth-child(2) {
          top: 0;
          right: -24%;
        }

        :nth-child(3) {
          top: 0;
          left: 0;
        }
      `}

    ${({ pattern }) =>
      pattern === "centerLeftRight" &&
      css`
        :nth-child(1) {
          top: 0;
          left: 0;
        }

        :nth-child(2) {
          top: 0;
          left: -28%;
        }

        :nth-child(3) {
          top: 0;
          right: -24%;
        }
      `}
  }
`;

const SidewaysLines: React.FC<SidewaysLinesProps> = (props) => {
  return (
    <Wrapper {...props}>
      <Line color={ANGE_RED} />
      <Line color={ANGE_YELLOW} />
      <Line color={ANGE_BLACK} />
    </Wrapper>
  );
};

export default SidewaysLines;
