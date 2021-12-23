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
  padding: 4% 0 10% 8%;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 16px;
  background-color: ${ANGE_WHITE_TRANSLUCENT};
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  padding: 5% 0 0 7%;

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1.3rem;
    line-height: 3rem;
  }
`;

const AngeProfile = () => {
  return (
    <Wrapper>
      <Title>プロフィール</Title>
      <Description>
        年齢: 26
        <br />
        身長: 160cm
        <br />
        血液型: O型
        <br />
        誕生日: 9月30日
      </Description>
    </Wrapper>
  );
};

export default AngeProfile;
