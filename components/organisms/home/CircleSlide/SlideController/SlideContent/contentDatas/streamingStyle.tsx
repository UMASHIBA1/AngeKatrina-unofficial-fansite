import React from "react";
import styled from "styled-components";
import BigSlideText from "../../../../../../atomics/home/BigSlideText";
import ContentDataType from "./ContentDataType";
import SlideText from "../../../../../../atomics/home/SlideText";

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const TitlePage: React.FC = () => (
  <Wrapper>
    <BigSlideText color="angeRed">アンジュの配信スタイル</BigSlideText>
  </Wrapper>
);

const ActiveTimePage: React.FC = () => (
  <Wrapper>
    <SlideText color="angeRed">
      基本的に生活リズムが逆転していることもあって、夜の時間帯に活動することがほとんど。
    </SlideText>
  </Wrapper>
);

const StreamingContentPage: React.FC = () => (
  <Wrapper>
    <SlideText color="angeRed">
      実は、筋金入りの雑談好きで用意した話題だけじゃなくて、とうとつな思い付きでよくしゃべる。
    </SlideText>
  </Wrapper>
);

const OverTimeContentPage: React.FC = () => (
  <Wrapper>
    <SlideText color="angeRed">
      けど、予定してた終わりの時間を延長することもしばしば...
    </SlideText>
  </Wrapper>
);

const streamingStyleData: ContentDataType = {
  animationType: "slide",
  slidePages: [
    {
      node: <TitlePage />,
      key: "streaming-style-title",
    },
    {
      node: <ActiveTimePage />,
      key: "streaming-style-active-time",
    },
    {
      node: <StreamingContentPage />,
      key: "streaming-style-streaming-content",
    },
    {
      node: <OverTimeContentPage />,
      key: "streaming-style-over-time-content",
    },
  ],
  animationDuration_ms: 7000,
};

export default streamingStyleData;
