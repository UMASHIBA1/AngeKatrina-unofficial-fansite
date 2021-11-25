import { Meta, Story } from "@storybook/react/types-6-0";
import CloseButton, { CloseButtonProps } from "./CloseButton";

export default {
  title: "common/CloseButton",
  component: CloseButton,
  args: {
    displayAnimationDelay: 500,
    disableAnimationDelay: 500,
    runDisplayAnimation: true,
    runCloseAnimation: false,
  },
} as Meta<CloseButtonProps>;

const Template: Story<CloseButtonProps> = (args) => <CloseButton {...args} />;

export const NormalClose = Template.bind({});
