import React from "react";
import styled from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import YoutubeEmbedder from "../../../atomics/common/YoutubeEmbedder/YoutubeEmbedder";
import EmbedBox from "../../../atomics/info/EmbedBox/EmbedBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
  padding: 0 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
`;

const YouTubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${sm_breakpoint}px) {
    flex-direction: row;
  }

  > * {
    margin: 8px;
  }
`;

const EmbedContentArea: React.VFC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <EmbedBox title="MusicVideo">
          <YouTubeWrapper>
            <YoutubeEmbedder>
              <iframe
                src="https://www.youtube.com/embed/YHXB1xp-xXc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </YoutubeEmbedder>
            <YoutubeEmbedder>
              <iframe
                src="https://www.youtube.com/embed/s2IBPDWqlr4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </YoutubeEmbedder>
          </YouTubeWrapper>
        </EmbedBox>
      </ContentWrapper>
    </Wrapper>
  );
};

export default EmbedContentArea;
