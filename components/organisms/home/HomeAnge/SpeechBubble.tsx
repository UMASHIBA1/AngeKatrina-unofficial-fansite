import React from "react";
import styled, { css } from "styled-components";
import { ANGE_WHITE, ANGE_RED } from "../../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../../constants/cssProps";

export interface Props {
  text: string;
  whichSide: "right" | "left";
  fontSize?: string;
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const rightSideCSS = css`
  ::before {
    content: "";
    position: absolute;
    left: -8%;
    bottom: -24%;
    width: 40%;
    height: 40%;
    background-color: ${ANGE_WHITE};
    clip-path: polygon(0 0, 100% 0, 100% 60%);
    transform: rotate(-32deg);
  }
`;

const leftSideCSS = css`
  ::after {
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
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  background-color: ${ANGE_WHITE};
  width: ${({ width }) => width};
  /* NOTE 吹き出しの横縦比は4:3にしておく */
  height: calc(${({ width }) => width} * 0.75);
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ANGE_RED};
  ${({ whichSide }) => (whichSide === "left" ? leftSideCSS : rightSideCSS)}
  ${TA_F1_BLOCK_LINE}
`;

const SpeechBubble: React.FC<Props> = (props: Props) => {
  const {
    text,
    whichSide,
    fontSize = "1rem",
    width = "100px",
    top = "auto",
    bottom = "auto",
    left = "auto",
    right = "auto",
  } = props;

  return (
    <SpeechBubbleMain
      whichSide={whichSide}
      fontSize={fontSize}
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
