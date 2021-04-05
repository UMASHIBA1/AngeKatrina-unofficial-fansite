import { Meta, Story } from "@storybook/react/types-6-0";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import Ring, { RingProps } from "./Ring";

export default {
  title: "common/Ring",
  component: Ring,
} as Meta<RingProps>;

const Template: Story<RingProps> = (args) => <Ring {...args} />;

export const YellowRing = Template.bind({});

YellowRing.args = {
  color: ANGE_YELLOW,
};

export const BlackRing = Template.bind({});

BlackRing.args = {
  color: ANGE_BLACK,
};

export const RedRing = Template.bind({});

RedRing.args = {
  color: ANGE_RED,
};

export const Ring60px = Template.bind({});

Ring60px.args = {
  widthHeight: "60px",
};
