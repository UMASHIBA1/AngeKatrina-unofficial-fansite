import { Meta, Story } from "@storybook/react";
import YoutubeEmbedder, { YouTubeEmbedderProps } from "./YoutubeEmbedder";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import { tablet_breakpoint } from "../../../../constants/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${ANGE_WHITE};
  padding: 24px 0;

  @media (min-width: ${tablet_breakpoint}px) {
    width: 800px;
  }
`;

export default {
  title: "common/YoutubeEmbedder",
  component: YoutubeEmbedder,
} as Meta<YouTubeEmbedderProps>;

const Template: Story<YouTubeEmbedderProps> = () => (
  <Wrapper>
    <YoutubeEmbedder>
      <iframe
        src="https://www.youtube.com/embed/V4aTYqa9wlE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
      ></iframe>
    </YoutubeEmbedder>
  </Wrapper>
);

export const NormalYoutubeEmbedder = Template.bind({});
