import { Meta, Story } from "@storybook/react";
import VTuberIcon, { VTuberIconProps } from "./VTuberIcon";
import angeImg from "../../../../public/imgs/ange-basic.png";

export default {
  title: "info/VTuberIcon",
  component: VTuberIcon,
  args: {
    imgPath: angeImg,
    imgAlt: "アンジュ画像",
  },
} as Meta<VTuberIconProps>;

const Template: Story<VTuberIconProps> = (args) => <VTuberIcon {...args} />;

export const NormalVTuberIcon = Template.bind({});
