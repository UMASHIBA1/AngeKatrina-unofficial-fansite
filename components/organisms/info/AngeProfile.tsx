import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../constants/cssProps";

const Wrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 1% 0 5% 3%;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 3rem;
  padding: 5% 0 0 7%;
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
