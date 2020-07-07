import { Props as SlideContentProps } from "../SlideContent/SlideContent";
import styled from "styled-components";
import BigSlideText from "../../../../atomics/home/BigSlideText";
import SlideText from "../../../../atomics/home/SlideText";

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const FirstPage = () => (
  <Wrapper>
    <BigSlideText color="angeRed">アンジュ・カトリーナ</BigSlideText>
    <BigSlideText color="angeRed">を推すメリットとデメリット</BigSlideText>
  </Wrapper>
);

const SecondPage = () => (
  <Wrapper>
    <BigSlideText color="angeRed">メリット</BigSlideText>
    <SlideText color="angeRed">とにかく可愛い</SlideText>
    <SlideText color="angeRed">配信が楽しい</SlideText>
    <SlideText color="angeRed">毎日の生きがいができる</SlideText>
    <SlideText color="angeRed">つらい時思い出して元気になれる</SlideText>
    <SlideText color="angeRed">とにかくかわいい</SlideText>
  </Wrapper>
);

const ThirdPage = () => (
  <Wrapper>
    <BigSlideText color="angeRed">デメリット</BigSlideText>
    <SlideText color="angeRed">骨抜きになってしまう</SlideText>
    <SlideText color="angeRed">配信のない夜がとてもさみしい</SlideText>
    <SlideText color="angeRed">コイビトがいる人はもめる原因に</SlideText>
    <SlideText color="angeRed">とにかく可愛すぎる</SlideText>
  </Wrapper>
);

const meritAndDemeritData: SlideContentProps = {
  animationType: "slide",
  slidePages: [<FirstPage />, <SecondPage />, <ThirdPage />],
};

export default meritAndDemeritData;
