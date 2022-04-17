import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import AngeLightDressImg from "../../../../public/imgs/gatya/ange-light-dress.png";
import AngeBasicImg from "../../../../public/imgs/ange-basic.png";
import AngeHeyImg from "../../../../public/imgs/gatya/ange-hey.png";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import Link from "next/link";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 24px;
`;

const BackgroundImg = styled.img<{ top: string; left: string; rotate: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: rotate(${({ rotate }) => rotate});
  object-fit: "contain";
`;

const DescriptionContent = styled.main`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
`;

const TitleArea = styled.div`
  width: 100%;
  padding: 32px 0 0px 48px;
`;

const Title = styled.h1`
  width: 240px;
  font-size: 1.75rem;
  border: solid ${ANGE_LIVE_BACK_COLOR};
  border-width: 0 0 2px 0;
  text-align: center;
  padding: 4px 0;
`;

const DescriptionText = styled.p`
  width: 94%;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2.5rem;
`;

const StartButton = styled.button`
  width: 300px;
  height: 82px;
  border: 2px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 12px;
  font-size: 28px;
  background-color: ${ANGE_WHITE};
  color: ${ANGE_LIVE_BACK_COLOR};
  box-sizing: border-box;
  padding-left: 24px;
  cursor: pointer;
  transition: background-color 200ms, color 200ms;
  :hover {
    background-color: ${ANGE_LIVE_BACK_COLOR};
    color: ${ANGE_WHITE};
  }

  @media (min-width: ${sm_breakpoint}px) {
    width: 360px;
  }
`;

const WarningText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  font-weight: 400;
  margin: 0 8px 8px;
  background-color: ${ANGE_WHITE};
  border-radius: 8px;
  padding: 4px;
`;

const DescriptionMain: React.VFC = () => {
  return (
    <Wrapper>
      <BackgroundImg
        height="240px"
        top="-20%"
        left="70%"
        rotate="180deg"
        alt="アンジュ薄いドレス姿の画像"
        src={AngeLightDressImg}
      />
      <BackgroundImg
        height="400px"
        top="70%"
        left="-10%"
        rotate="30deg"
        alt="アンジュ基本ローブ姿の画像"
        src={AngeBasicImg}
      />
      <BackgroundImg
        height="500px"
        top="46%"
        left="84%"
        rotate="-30deg"
        alt="アンジュてを掲げてるローブ姿の画像"
        src={AngeHeyImg}
      />
      <DescriptionContent>
        <TitleArea>
          <Title>アンジュガチャ！</Title>
        </TitleArea>
        <DescriptionText>
          お楽しみ要素としてアンジュが出てくるガチャガチャを作ったよ！
          <br />
          出てくるアンジュの衣装は3種類！
          <br />
          ぜひ遊んでみてね！
        </DescriptionText>
        <Link href="/gatya">
          <StartButton>ガチャスタート！</StartButton>
        </Link>
        <WarningText>
          ※だいぶ処理が重いガチャガチャになっちゃったからスペックの高いPC/スマホで遊んでね！
        </WarningText>
      </DescriptionContent>
    </Wrapper>
  );
};

export default DescriptionMain;
