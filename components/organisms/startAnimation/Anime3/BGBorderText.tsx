import React from "react";
import styled, { css } from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

interface Props {
  children: string;
}

const Text = styled.div<{
  text: Props["children"];
}>`
  position: relative;
  top: 0;
  left: 0;
  text-shadow: 1px 0px ${ANGE_LIVE_BACK_COLOR}, 0px 1px ${ANGE_LIVE_BACK_COLOR},
    -1px 0px ${ANGE_LIVE_BACK_COLOR}, 0px -1px ${ANGE_LIVE_BACK_COLOR};
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  font-size: 1.5rem;
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 3rem;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    font-size: 4.5rem;
  }

  ::after {
    position: absolute;
    top: 0px;
    left: 0px;
    ${({ text }) => css`
      content: "${text}";
    `}
    color: ${ANGE_WHITE};
    font-size: 1.5rem;
    @media (min-width: ${sm_breakpoint}px) {
      font-size: 3rem;
    }
    @media (min-width: ${tablet_breakpoint}px) {
      font-size: 4.5rem;
    }
    ${BUNKYU_MIDASHI_GO_STD}
  }
`;

const BGBorderText: React.VFC<Props> = ({ children }) => {
  return <Text text={children}>{children}</Text>;
};

export default BGBorderText;
