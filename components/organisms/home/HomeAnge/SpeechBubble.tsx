import React from "react";
import styled, { css } from "styled-components";
import { ANGE_WHITE, ANGE_RED } from "../../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../../constants/cssProps";

interface Props {
  text: string;
  whichSide: "right" | "left";
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const leftSideCSS = css`
  ::before {
    content: "";
    position: absolute;
    right: -8%;
    bottom: -24%;
    width: 40%;
    height: 40%;
    background-color: ${ANGE_WHITE};
    clip-path: polygon(30% 0, 100% 0, 0 60%);
    transform: rotate(28deg);
  }
`;

const SpeechBubbleMain = styled.div<Required<Omit<Props, "text">>>`
  position: absolute;
  background-color: ${ANGE_WHITE};
  width: ${({ width }) => width};
  /* NOTE 吹き出しの横縦比は4:3にしておく */
  height: calc(${({ width }) => width} * 0.75);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ANGE_RED};
  ${TA_F1_BLOCK_LINE}
  ${leftSideCSS}
`;

const SpeechBubble: React.FC<Props> = (props: Props) => {
  const {
    text,
    whichSide,
    width = "100px",
    top = "auto",
    bottom = "auto",
    left = "auto",
    right = "auto",
  } = props;

  return (
    <SpeechBubbleMain
      whichSide={whichSide}
      width={width}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {text}
    </SpeechBubbleMain>
  );
};

export default SpeechBubble;
