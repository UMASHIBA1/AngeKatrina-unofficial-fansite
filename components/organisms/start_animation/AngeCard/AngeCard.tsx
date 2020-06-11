import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SSRText from "./SSRText";
import WhiteBG from "./WhiteBG";
import AngeName from "./AngeName";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const BackGround = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 20px;
`;

const WhiteBorderBG = styled.div`
  position: absolute;
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
          <WhiteBG />
          <AngeName />
        </WhiteBorderBG>
      </BackGround>
    </Wrapper>
  );
};

export default AngeCard;
