import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const AngeText = styled.text`
  font-size: 10vw;

  ${BUNKYU_MIDASHI_GO_STD}
`;

const CenterText: React.VFC = () => {
  return (
    <Wrapper>
      <svg width="100%" height="100%" xmlns="http://www.w3c.org/2000/svg">
        <AngeText
          x="50%"
          y="52%"
          textAnchor="middle"
          fill={ANGE_LIVE_BACK_COLOR}
        >
          NIJISANJI LIVER
        </AngeText>
      </svg>
    </Wrapper>
  );
};

export default CenterText;
