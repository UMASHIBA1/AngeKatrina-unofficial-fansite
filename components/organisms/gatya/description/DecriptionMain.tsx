import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import AngeLightDressImg from "../../../../public/imgs/gatya/ange-light-dress.png";
import AngeBasicImg from "../../../../public/imgs/ange-basic.png";
import AngeHeyImg from "../../../../public/imgs/gatya/ange-hey.png";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import Link from "next/link";
import {
  colorChange,
  fadein,
  scale,
  translate,
} from "../../../../styles/commonAnimation";
import AnimationProps from "../../../../typing/AnimationProps";

const backgroundAnimation: AnimationProps = {
  delay_ms: 300,
  duration_ms: 500,
};

const titleAnimation: AnimationProps = {
  delay_ms: backgroundAnimation.delay_ms,
  duration_ms: 300,
};

const descriptionTextAnimation: AnimationProps = {
  delay_ms: titleAnimation.delay_ms + 50,
  duration_ms: 600,
};

const startButtonAnimation: AnimationProps = {
  delay_ms: descriptionTextAnimation.delay_ms + 50,
  duration_ms: 600,
};

const warningTextAnimation: AnimationProps = {
  delay_ms: startButtonAnimation.delay_ms + 350,
  duration_ms: 500,
};

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
  animation: ${fadein(1)} ${backgroundAnimation.duration_ms - 100}ms both
    ${backgroundAnimation.delay_ms - 100}ms linear;
`;

const BackgroundImg = styled.img<{
  top: string;
  left: string;
  rotate: string;
  delayMs: number;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: rotate(${({ rotate }) => rotate});
  object-fit: "contain";
  animation: ${fadein(1)} ${backgroundAnimation.duration_ms}ms both
    ${({ delayMs }) => backgroundAnimation.delay_ms + delayMs}ms linear;
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
  position: relative;
  top: 0;
  left: 0;
  width: 240px;
  font-size: 1.75rem;
  text-align: center;
  padding: 4px 0;
  overflow: hidden;
  animation: ${colorChange(ANGE_WHITE, ANGE_LIVE_BACK_COLOR)} 0ms ease-in-out
    ${titleAnimation.delay_ms + titleAnimation.duration_ms / 2}ms both;

  :after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${translate({ x: "-100%", y: 0 }, { x: "100%", y: 0 })}
      ${titleAnimation.duration_ms}ms ease-in-out ${titleAnimation.delay_ms}ms
      both;
  }
`;

const DescriptionTextWrapper = styled.div`
  width: 94%;
  text-align: center;
  font-size: 1.25rem;
`;

const AnimateDescriptionText = styled.div<{ delayMs: number }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  margin: 4px 0;
  animation: ${colorChange(ANGE_WHITE, ANGE_LIVE_BACK_COLOR)} 0ms ease-in-out
    ${({ delayMs }) =>
      descriptionTextAnimation.delay_ms +
      descriptionTextAnimation.duration_ms / 2 +
      delayMs}ms
    both;
  :after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${translate({ x: "-100%", y: 0 }, { x: "100%", y: 0 })}
      ${descriptionTextAnimation.duration_ms}ms ease-in-out
      ${({ delayMs }) => descriptionTextAnimation.delay_ms + delayMs}ms both;
  }
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

  transform: scale(0);

  animation: ${scale(1)} ease-out ${startButtonAnimation.duration_ms - 200}ms
      both ${startButtonAnimation.delay_ms}ms,
    ${fadein()} ${startButtonAnimation.duration_ms}ms ease-out
      ${startButtonAnimation.delay_ms + 100}ms both;

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
  animation: ${fadein()} ease-out ${warningTextAnimation.duration_ms}ms both
    ${warningTextAnimation.delay_ms}ms;
`;

const DescriptionMain: React.VFC = () => {
  return (
    <Wrapper>
      <BackgroundImg
        delayMs={0}
        height="240px"
        top="-20%"
        left="70%"
        rotate="180deg"
        alt="アンジュ薄いドレス姿の画像"
        src={AngeLightDressImg}
      />
      <BackgroundImg
        delayMs={200}
        height="400px"
        top="70%"
        left="-10%"
        rotate="30deg"
        alt="アンジュ基本ローブ姿の画像"
        src={AngeBasicImg}
      />
      <BackgroundImg
        delayMs={400}
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
        <DescriptionTextWrapper>
          <AnimateDescriptionText delayMs={0}>
            お楽しみ要素としてアンジュが出てくるガチャガチャを作ったよ！
          </AnimateDescriptionText>
          <AnimateDescriptionText delayMs={100}>
            出てくるアンジュの衣装は3種類！
          </AnimateDescriptionText>
          <AnimateDescriptionText delayMs={200}>
            ぜひ遊んでみてね！
          </AnimateDescriptionText>
        </DescriptionTextWrapper>
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
