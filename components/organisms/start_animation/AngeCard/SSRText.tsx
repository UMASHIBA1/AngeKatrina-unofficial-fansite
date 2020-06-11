import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TextBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 0 0px 0 14px;
  border: #ffffff solid 5px;
  ${BUNKYU_MIDASHI_GO_STD};
  @media (max-width: ${sm_breakpoint}px) {
    width: 80px;
    height: 40px;
    font-size: 1.5rem;
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    width: 110px;
    height: 50px;
    font-size: 1.7rem;
  }

  @media (min-width: ${tablet_breakpoint + 1}px) {
    width: 140px;
    height: 60px;
    font-size: 2.5rem;
  }
`;

const SSRText: React.FC = () => {
  return (
    <Wrapper>
      <TextBG>
        <span>SSR</span>
      </TextBG>
    </Wrapper>
  );
};

export default SSRText;
