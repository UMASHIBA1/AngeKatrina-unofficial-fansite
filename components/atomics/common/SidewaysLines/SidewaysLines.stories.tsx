import { Meta, Story } from "@storybook/react/types-6-0";
import styled from "styled-components";
import SidewaysLines, { SidewaysLinesProps } from "./SidewaysLines";

const Decorator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px;
`;

export default {
  title: "common/SidewaysLines",
  component: SidewaysLines,
  decorators: [
    (Story) => (
      <Decorator>
        <Story></Story>
      </Decorator>
    ),
  ],
} as Meta<SidewaysLinesProps>;

const Template: Story<SidewaysLinesProps> = (args) => (
  <SidewaysLines {...args} />
);

export const LeftRightCenter = Template.bind({});

LeftRightCenter.args = {
  pattern: "leftRightCenter",
  animation: "none",
};

export const RightCenterLeft = Template.bind({});

RightCenterLeft.args = {
  pattern: "rightCenterLeft",
  animation: "none",
};

export const CenterLeftRight = Template.bind({});

CenterLeftRight.args = {
  pattern: "centerLeftRight",
  animation: "none",
};

export const SlideFadeinLeftRightCenter = Template.bind({});

SlideFadeinLeftRightCenter.args = {
  pattern: "centerLeftRight",
  animation: "slideFadein",
  animationDelayMs: 400,
};

export const SlideFadeinRightCenterLeft = Template.bind({});

SlideFadeinRightCenterLeft.args = {
  pattern: "rightCenterLeft",
  animation: "slideFadein",
  animationDelayMs: 400,
};

export const SlideFadeinCenterLeftRight = Template.bind({});

SlideFadeinCenterLeftRight.args = {
  pattern: "centerLeftRight",
  animation: "slideFadein",
  animationDelayMs: 400,
};
