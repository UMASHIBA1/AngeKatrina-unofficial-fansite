import React from "react";
import styled from "styled-components";
import MashmellowLogo from "../../../../public/imgs/info/mashmellow-logo.png";
import ThumbnailLink from "../../../atomics/info/ThumbnailLink/ThumbnailLink";
import NijisanjiLogo from "../../../../public/imgs/info/nijisanji-logo.png";
import NijisanjiWikiLogo from "../../../../public/imgs/info/nijisanji-wiki.png";
import rectangle from "../../../../public/imgs/info/rectangle.png";
import twitterLogo from "../../../../public/imgs/info/twitter-logo.png";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100%;
  margin: 120px 0;
  padding-bottom: 120px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px 80px;
  width: 560px;
`;

const ThumbnailWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img<{ height?: string; width?: string }>`
  object-fit: contain;
  height: ${({ height }) => height || "60%"};
  width: ${({ width }) => width || "70%"};
  overflow: hidden;
`;

const red = "#FF0000";
const RedThumbnailWrapper = styled.div`
  display: flex;
  background-color: ${red};
  width: 100%;
  height: 100%;
`;

const RedThumbnail = styled.img`
  object-fit: contain;
  height: 30%;
  overflow: hidden;
  margin: 22% 0 0 44%;
`;

const white = "#FFFFFF";
const twitterColor = "#1DA1F2";

const AngeLinksArea: React.VFC = () => {
  return (
    <Wrapper>
      <Title>リンク集</Title>
      <LinksWrapper>
        <ThumbnailLink
          description="アンジュのマシュマロ"
          link="https://marshmallow-qa.com/ange_katrina_"
        >
          <ThumbnailWrapper color={white}>
            <Thumbnail src={MashmellowLogo} alt="マシュマロロゴ" />
          </ThumbnailWrapper>
        </ThumbnailLink>
        <ThumbnailLink
          description="にじさんじ公式サイト"
          link="https://www.nijisanji.jp/members/ange-katrina"
        >
          <ThumbnailWrapper color={white}>
            <Thumbnail src={NijisanjiLogo} alt="にじさんじロゴ" />
          </ThumbnailWrapper>
        </ThumbnailLink>
        <ThumbnailLink
          description="アンジュ非公式Wiki"
          link="https://wikiwiki.jp/nijisanji/%E3%82%A2%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%BB%E3%82%AB%E3%83%88%E3%83%AA%E3%83%BC%E3%83%8A"
        >
          <ThumbnailWrapper color={white}>
            <Thumbnail src={NijisanjiWikiLogo} alt="非公式Wiki" />
          </ThumbnailWrapper>
        </ThumbnailLink>
        <ThumbnailLink
          description="アンジュのチャンネル"
          link="https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw"
        >
          <RedThumbnailWrapper>
            <RedThumbnail src={rectangle} alt="Youtubeロゴ" />
          </RedThumbnailWrapper>
        </ThumbnailLink>
        <ThumbnailLink
          description="アンジュのTwitter"
          link="https://twitter.com/Ange_Katrina_"
        >
          <ThumbnailWrapper color={twitterColor}>
            <Thumbnail height="30%" src={twitterLogo} alt="アンジュのTwitter" />
          </ThumbnailWrapper>
        </ThumbnailLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default AngeLinksArea;
