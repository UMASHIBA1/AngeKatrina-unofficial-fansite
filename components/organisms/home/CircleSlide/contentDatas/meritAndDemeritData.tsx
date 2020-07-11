import React from "react";
import styled from "styled-components";
import BigSlideText from "../../../../atomics/home/BigSlideText";
import SlideText from "../../../../atomics/home/SlideText";
import contentDataType from "./contentDataType";

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const FirstPage: React.FC = () => (
  <Wrapper>
    <BigSlideText color="angeRed">アンジュ・カトリーナ</BigSlideText>
    <BigSlideText color="angeRed">を推すメリットとデメリット</BigSlideText>
  </Wrapper>
);

const SecondPage: React.FC = () => (
  <Wrapper>
    <BigSlideText color="angeRed">メリット</BigSlideText>
    <SlideText color="angeRed">とにかく可愛い</SlideText>
    <SlideText color="angeRed">配信が楽しい</SlideText>
    <SlideText color="angeRed">毎日の生きがいができる</SlideText>
    <SlideText color="angeRed">つらい時思い出して元気になれる</SlideText>
    <SlideText color="angeRed">とにかくかわいい</SlideText>
  </Wrapper>
);

const ThirdPage: React.FC = () => (
  <Wrapper>
    <BigSlideText color="angeRed">デメリット</BigSlideText>
    <SlideText color="angeRed">骨抜きになってしまう</SlideText>
    <SlideText color="angeRed">配信のない夜がとてもさみしい</SlideText>
    <SlideText color="angeRed">コイビトがいる人はもめる原因に</SlideText>
    <SlideText color="angeRed">とにかく可愛すぎる</SlideText>
  </Wrapper>
);

const FourthPage: React.FC = () => (
  <Wrapper>
    <BigSlideText color="angeRed">用法用量を守って楽しんでね！</BigSlideText>
  </Wrapper>
);

const meritAndDemeritData: contentDataType = {
  animationType: "splitedSlide",
  slidePages: [<SecondPage />, <FirstPage />, <ThirdPage />, <FourthPage />],
  animationDuration_ms: 7000,
};

export default meritAndDemeritData;
