import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_RED,
  ANGE_WHITE,
} from "../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";

interface Props {
  color: "bgRed" | "angeRed" | "white";
  children: ReactNode;
}

const TextMain = styled.div`
  ${TA_F1_BLOCK_LINE}
  font-size: 0.8rem;
  line-height: 2;
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1rem;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    font-size: 1.6rem;
  }

  color: ${({ color }) =>
    color === "bgRed"
      ? ANGE_LIVE_BACK_COLOR
      : color === "angeRed"
      ? ANGE_RED
      : color === "white"
      ? ANGE_WHITE
      : null};
`;

const SlideText: React.FC<Props> = (props: Props) => (
  <TextMain color={props.color}>{props.children}</TextMain>
);

export default SlideText;
