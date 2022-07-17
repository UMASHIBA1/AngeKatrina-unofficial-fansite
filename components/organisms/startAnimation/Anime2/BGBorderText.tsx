import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

interface Props {
  fontSize: string;
  children: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Text = styled.div<{
  fontSize: Props["fontSize"];
  top?: Props["top"];
  left?: Props["left"];
  right?: Props["right"];
  bottom?: Props["bottom"];
  text: Props["children"];
}>`
  position: absolute;
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}
  text-shadow: 1px 0px ${ANGE_LIVE_BACK_COLOR}, 
  0px 1px ${ANGE_LIVE_BACK_COLOR},
  -1px 0px ${ANGE_LIVE_BACK_COLOR},
  0px -1px ${ANGE_LIVE_BACK_COLOR};
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}

  ::after {
    position: absolute;
    top: 0px;
    left: 0px;
    ${({ text }) => css`
      content: "${text}";
    `}
    color: ${ANGE_WHITE};
    ${({ fontSize }) => css`
      font-size: ${fontSize};
    `}
    ${BUNKYU_MIDASHI_GO_STD}
  }
`;

const BGBorderText: React.VFC<Props> = ({
  fontSize,
  top,
  left,
  right,
  bottom,
  children,
}) => {
  return (
    <Text
      fontSize={fontSize}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      text={children}
    >
      {children}
    </Text>
  );
};

export default BGBorderText;
