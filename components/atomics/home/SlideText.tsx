import React, { ReactNode } from "react";
import styled from "styled-components";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  ANGE_RED,
} from "../../../constants/colors";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";

const TextMain = styled.div<{ color: Props["color"] }>`
  ${TA_F1_BLOCK_LINE}
  font-size: 1.2rem;
  line-height: 1.8;
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 2.2rem;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    font-size: 2.5rem;
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

interface Props {
  color: "bgRed" | "angeRed" | "white";
  children: ReactNode;
}

const SlideText: React.FC<Props> = (props: Props) => {
  return <TextMain color={props.color}>{props.children}</TextMain>;
};

export default SlideText;
