import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AngeKatrinaText = styled.div`
  position: absolute;
  right: 8%;
  bottom: 8%;
  font-size: 11rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_WHITE};
  text-shadow: ${ANGE_LIVE_BACK_COLOR} 1px 0 0, ${ANGE_LIVE_BACK_COLOR} 0 1px 0,
    ${ANGE_LIVE_BACK_COLOR} -1px 0 0, ${ANGE_LIVE_BACK_COLOR} 0 -1px 0;
`;

const BackGround = () => {
  return (
    <Wrapper>
      <AngeKatrinaText>Ange Katrina</AngeKatrinaText>
    </Wrapper>
  );
};

export default BackGround;
