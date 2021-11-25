import React from "react";
import styled from "styled-components";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import { tabletBreakPointForAngeCard, minimalPCBreakPoint } from "./constants";

const Wrapper = styled.div`
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
  position: absolute;
  @media (max-width: ${sm_breakpoint}px) {
    left: 10px;
    bottom: 16px;
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    left: 30px;
    bottom: 30px;
  }

  @media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
    top: 20%;
    left: 5%;
  }
`;

const AngeTitle = styled.div`
  @media (max-width: ${sm_breakpoint}px) {
    font-size: 1rem;
    border-bottom: solid 1px ${ANGE_LIVE_BACK_COLOR};
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    font-size: 1.8rem;
    border-bottom: solid 2px ${ANGE_LIVE_BACK_COLOR};
  }

  @media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
    font-size: 1.8rem;
    border-bottom: solid 2px ${ANGE_LIVE_BACK_COLOR};
  }

  @media (min-width: ${minimalPCBreakPoint + 1}px) {
    font-size: 2rem;
    border-bottom: solid 2px ${ANGE_LIVE_BACK_COLOR};
  }
`;

const AngeNameMain = styled.div`
  @media (max-width: ${sm_breakpoint}px) {
    font-size: 1.5rem;
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    font-size: 3rem;
  }

  @media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
    font-size: 3rem;
  }

  @media (min-width: ${minimalPCBreakPoint + 1}px) {
    font-size: 3.5rem;
  }
`;

const AngeName: React.FC = () => {
  return (
    <Wrapper>
      <AngeTitle>公式美少女錬金術師ライバー？</AngeTitle>
      <AngeNameMain>アンジュ・カトリーナ</AngeNameMain>
    </Wrapper>
  );
};

export default AngeName;
