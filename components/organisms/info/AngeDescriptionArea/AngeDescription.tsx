import React from "react";
import styled from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE_TRANSLUCENT,
} from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8%;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 16px;
  background-color: ${ANGE_WHITE_TRANSLUCENT};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding: 0 0 10px 0;
  border: solid ${ANGE_LIVE_BACK_COLOR};
  border-width: 0 0 2px 0;

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  padding: 16px 0 0 0;

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1.3rem;
    line-height: 2.6rem;
  }
`;

const AngeDescription = () => {
  return (
    <Wrapper>
      <Title>アンジュ・カトリーナ</Title>
      <Description>
        ボロボロの小屋で時間を忘れて錬金術の研究に明け暮れている。大人っぽい女性的な体に憧れており、実はその研究をしているとかしていないとか。
      </Description>
    </Wrapper>
  );
};

export default AngeDescription;
