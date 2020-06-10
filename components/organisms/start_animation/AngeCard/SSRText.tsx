import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

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
  width: 80px;
  height: 40px;
  border-radius: 0 4px 0 14px;
  border: #ffffff solid 5px;
  ${BUNKYU_MIDASHI_GO_STD}
  font-size: 1.5rem;
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
