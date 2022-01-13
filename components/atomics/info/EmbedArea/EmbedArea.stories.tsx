import { Meta, Story } from "@storybook/react";
import EmbedArea, { EmbededAreaProps } from "./EmbedArea";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import YoutubeEmbedder from "../../common/YoutubeEmbedder/YoutubeEmbedder";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${ANGE_WHITE};
  padding: 24px 0;
  height: 100%;

  @media (min-width: ${tablet_breakpoint}px) {
    width: 1200px;
  }
`;

const SampleEmbedElement: React.VFC = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/V4aTYqa9wlE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const YouTubeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > * {
    margin: 4px;
  }

  @media (min-width: ${sm_breakpoint}px) {
    flex-direction: row;
  }
`;

export default {
  title: "info/EmbedArea",
  component: EmbedArea,
  args: {
    title: "サンプルタイトル",
  },
} as Meta<EmbededAreaProps>;

const Template: Story<EmbededAreaProps> = (args) => (
  <Wrapper>
    <EmbedArea title={args.title}>
      <YouTubeWrapper>
        <YoutubeEmbedder>
          <SampleEmbedElement />
        </YoutubeEmbedder>
        <YoutubeEmbedder>
          <SampleEmbedElement />
        </YoutubeEmbedder>
      </YouTubeWrapper>
    </EmbedArea>
  </Wrapper>
);

export const NormalEmbedArea = Template.bind({});
