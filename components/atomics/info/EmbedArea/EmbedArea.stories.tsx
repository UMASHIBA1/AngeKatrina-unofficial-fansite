import { Meta, Story } from "@storybook/react";
import EmbedArea, { EmbededAreaProps } from "./EmbedArea";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import { tablet_breakpoint } from "../../../../constants/breakpoints";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${ANGE_WHITE};
  padding: 24px 0;

  @media (min-width: ${tablet_breakpoint}px) {
    width: 800px;
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
      <SampleEmbedElement />
    </EmbedArea>
  </Wrapper>
);

export const NormalEmbedArea = Template.bind({});
