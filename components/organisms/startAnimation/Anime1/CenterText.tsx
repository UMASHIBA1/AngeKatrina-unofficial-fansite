import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { fadein } from "../../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
}

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

const BGAnimateAngeText = styled.text`
  font-size: 10vw;
  opacity: 0;
  ${BUNKYU_MIDASHI_GO_STD}
  animation: ${fadein(1)} 2000ms forwards ease-out 400ms;
`;

const CenterText: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <svg width="100%" height="100%" xmlns="http://www.w3c.org/2000/svg">
          <AngeText
            stroke={ANGE_LIVE_BACK_COLOR}
            x="50%"
            y="52%"
            textAnchor="middle"
            fill="transparent"
          >
            NIJISANJI LIVER
          </AngeText>
          <BGAnimateAngeText
            x="50%"
            y="52%"
            textAnchor="middle"
            fill={ANGE_LIVE_BACK_COLOR}
          >
            NIJISANJI LIVER
          </BGAnimateAngeText>
        </svg>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default CenterText;
