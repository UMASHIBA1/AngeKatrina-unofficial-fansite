import { Meta, Story } from "@storybook/react";
import ThumbnailLink from "./ThumbnailLink";
import { ThumbnailLinkProps } from "./ThumbnailLink";
import MashmellowLogoImg from "../../../../public/imgs/mashmellow-logo.png";
import styled from "styled-components";

const MashmellowThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const MashmellowImg = styled.img`
  object-fit: contain;
  height: 60%;
  width: 100%;
  overflow: hidden;
`;

export default {
  title: "info/ThumbnailLink",
  component: ThumbnailLink,
  args: {
    description: "アンジュのマシュマロ",
    link: "https://marshmallow-qa.com/ange_katrina_",
  },
} as Meta<ThumbnailLinkProps>;

const Template: Story<ThumbnailLinkProps> = (args) => (
  <ThumbnailLink {...args}>
    <MashmellowThumbnail>
      <MashmellowImg src={MashmellowLogoImg} alt="マシュマロロゴ" />
    </MashmellowThumbnail>
  </ThumbnailLink>
);

export const NormalThumbnailLink = Template.bind({});
