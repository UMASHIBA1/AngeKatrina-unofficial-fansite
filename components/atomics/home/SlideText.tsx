import React, { ReactNode } from "react";
import styled from "styled-components";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  ANGE_RED,
} from "../../../constants/colors";

const TextMain = styled.div<{ color: Props["color"] }>`
  ${TA_F1_BLOCK_LINE}
  font-size: 40px;
  line-height: 1.8;
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
