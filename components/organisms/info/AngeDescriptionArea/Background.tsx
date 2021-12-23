import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AngeKatrinaText = styled.div`
  position: absolute;
  left: 15%;
  bottom: 0;
  font-size: 6rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_WHITE};
  text-align: right;
  text-shadow: ${ANGE_LIVE_BACK_COLOR} 1px 0 0, ${ANGE_LIVE_BACK_COLOR} 0 1px 0,
    ${ANGE_LIVE_BACK_COLOR} -1px 0 0, ${ANGE_LIVE_BACK_COLOR} 0 -1px 0;

  @media (min-width: ${sm_breakpoint}px) {
    left: 35%;
    font-size: 9rem;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    font-size: 11rem;
    left: 0;
    bottom: 8%;
    right: 8%;
  }
`;

const BackGround = () => {
  return (
    <Wrapper>
      <AngeKatrinaText>Ange Katrina</AngeKatrinaText>
    </Wrapper>
  );
};

export default BackGround;
