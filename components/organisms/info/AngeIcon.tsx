import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  RED_SHADOW_COLOR,
} from "../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import AngeBasicImgPath from "../../../public/imgs/ange-basic.png";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;

  @media (min-width: ${tablet_breakpoint}px) {
    width: 45%;
    height: 100%;
  }
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: ${ANGE_WHITE};
  border: 4px ${ANGE_LIVE_BACK_COLOR} solid;
  border-radius: 50%;
  box-shadow: 0 5px 20px ${RED_SHADOW_COLOR};
  overflow: hidden;
  width: 40vw;
  height: 40vw;
  @media (min-width: ${tablet_breakpoint}px) {
    width: 25vw;
    height: 25vw;
  }
`;

const AngeImg = styled.img`
  width: 80%;
  margin-top: 20%;
  object-fit: cover;
`;

const AngeName = styled.p`
  font-size: 1.2rem;
  margin-top: 28px;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${TA_F1_BLOCK_LINE}

  @media (min-width: ${sm_breakpoint}px) {
    margin-top: 40px;
    font-size: 1.8rem;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    display: none;
  }
`;

const AngeIcon: React.VFC = () => {
  return (
    <Wrapper>
      <Background>
        <AngeImg src={AngeBasicImgPath} alt="アンジュ画像" />
      </Background>
      <AngeName>アンジュ・カトリーナ</AngeName>
    </Wrapper>
  );
};

export default AngeIcon;
