import React from "react";
import styled from "styled-components";
import BigSlideText from "../../../../../../atomics/home/BigSlideText";
import RizeImg from "../../../../../../../public/imgs/rize-heruesta.png";
import InuiImg from "../../../../../../../public/imgs/inui-toko.png";
import AngeImg from "../../../../../../../public/imgs/ange-basic.png";
import SlideText from "../../../../../../atomics/home/SlideText";
import contentDataType from "./contentDataType";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const createStyledImg = (src: string, alt: string) =>
  styled.img.attrs({
    src,
    alt,
  })`
    height: 80%;
  `;

const StyledAngeImg = createStyledImg(AngeImg, "アンジュカトリーナ画像");
const StyledInuiImg = createStyledImg(InuiImg, "戌亥とこ画像");
const StyledRizeImg = createStyledImg(RizeImg, "リゼ・ヘルエスタ画像");

const TitlePage: React.FC = () => (
  <TextWrapper>
    <BigSlideText color="angeRed">さんばかとは？</BigSlideText>
  </TextWrapper>
);

const AngePage: React.FC = () => (
  <Wrapper>
    <StyledAngeImg />
    <SlideText color="angeRed">アンジュ・カトリーナ</SlideText>
  </Wrapper>
);

const RizePage: React.FC = () => (
  <Wrapper>
    <StyledRizeImg />
    <SlideText color="angeRed">リゼ・ヘルエスタ</SlideText>
  </Wrapper>
);

const InuiPage: React.FC = () => (
  <Wrapper>
    <StyledInuiImg />
    <SlideText color="angeRed">いぬいとこ</SlideText>
  </Wrapper>
);

const DescriptionPage: React.FC = () => (
  <TextWrapper>
    <BigSlideText color="angeRed">の、なかよし同期三人組！</BigSlideText>
  </TextWrapper>
);

const SecondDescriptionPage: React.FC = () => (
  <TextWrapper>
    <BigSlideText color="angeRed">いっしょにゲームとか配信</BigSlideText>
    <BigSlideText color="angeRed">をしたりしてるよ！</BigSlideText>
  </TextWrapper>
);

const sanbakaData: contentDataType = {
  animationType: "slide",
  slidePages: [
    {
      node: <TitlePage />,
      key: "sanbaka-description-title",
    },
    {
      node: <AngePage />,
      key: "sanbaka-description-ange",
    },
    {
      node: <RizePage />,
      key: "sanbaka-description-rize",
    },
    {
      node: <InuiPage />,
      key: "sanbaka-description-inui",
    },
    {
      node: <DescriptionPage />,
      key: "sanbaka-description-description",
    },
    {
      node: <SecondDescriptionPage />,
      key: "sanbaka-description-description2",
    },
  ],
  animationDuration_ms: 8000,
};

export default sanbakaData;
