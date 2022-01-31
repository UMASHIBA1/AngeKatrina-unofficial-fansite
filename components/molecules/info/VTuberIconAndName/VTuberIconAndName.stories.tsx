import { Meta, Story } from "@storybook/react";

import angeImg from "../../../../public/imgs/ange-basic.png";
import VTuberIconAndName, { VTuberIconAndNameProps } from "./VTuberIconAndName";

export default {
  title: "info/VTuberIconAndName",
  component: VTuberIconAndName,
  args: {
    imgPath: angeImg,
    imgAlt: "アンジュ画像",
    vtuberName: "アンジュ・カトリーナ",
  },
} as Meta<VTuberIconAndNameProps>;

const Template: Story<VTuberIconAndNameProps> = (args) => (
  <VTuberIconAndName {...args} />
);

export const NormalVTuberIcon = Template.bind({});
