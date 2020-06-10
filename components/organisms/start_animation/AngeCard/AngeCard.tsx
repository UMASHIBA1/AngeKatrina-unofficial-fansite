import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SSRText from "./SSRText";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const BackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 20px;
`;

const WhiteBorderBG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 14px;
  border: #ffffff solid 5px;
`;

const AngeCard: React.FC = () => {
  return (
    <Wrapper>
      <BackGround>
        <WhiteBorderBG>
          <SSRText />
        </WhiteBorderBG>
      </BackGround>
    </Wrapper>
  );
};

export default AngeCard;