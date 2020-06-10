import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TextBG = styled.div`
  background-color: #ffffff;
  color: ${ANGE_LIVE_BACK_COLOR};
  width: 80px;
  height: 40px;
  border-radius: 0 4px 0 14px;
  border: #ffffff solid 5px;
`;

const SSRText: React.FC = () => {
  return (
    <Wrapper>
      <TextBG>SSR</TextBG>
    </Wrapper>
  );
};

export default SSRText;
