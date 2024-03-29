import { Meta, Story } from "@storybook/react/types-6-0";
import styled from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import CrossMark, { CrossMarkProps } from "./CrossMark";

const Decorator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  border: 2px dotted blue;
`;

export default {
  title: "common/CrossMark",
  component: CrossMark,
  decorators: [
    (Story) => (
      <Decorator>
        <Story></Story>
      </Decorator>
    ),
  ],
} as Meta<CrossMarkProps>;

const Template: Story<CrossMarkProps> = (args) => (
  <CrossMark {...args} runStartAnimation={true} />
);

export const YellowCross = Template.bind({});

YellowCross.args = {
  color: ANGE_YELLOW,
};

export const BlackCross = Template.bind({});

BlackCross.args = {
  color: ANGE_BLACK,
};

export const RedCross = Template.bind({});

RedCross.args = {
  color: ANGE_RED,
};

export const Cross60px = Template.bind({});

Cross60px.args = {
  color: ANGE_RED,
  widthHeight: "60px",
};

export const ExpandRotateAnimationCross = Template.bind({});

ExpandRotateAnimationCross.args = {
  color: ANGE_RED,
  animation: "expandRotate",
};

export const SlideAnimationCross = Template.bind({});

SlideAnimationCross.args = {
  color: ANGE_YELLOW,
  animation: "slideLine",
};
