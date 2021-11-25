import { Meta, Story } from "@storybook/react/types-6-0";
import styled from "styled-components";
import Triangle, { TriangleProps } from "./Triangle";

const Decorator = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  background-color: skyblue;
`;

export default {
  title: "common/Triangle",
  component: Triangle,
  decorators: [
    (Story) => (
      <Decorator>
        <Story></Story>
      </Decorator>
    ),
  ],
} as Meta<TriangleProps>;

const Template: Story<TriangleProps> = (args) => <Triangle {...args} />;

export const YellowTriangle = Template.bind({});

YellowTriangle.args = {
  color: "yellow",
};

export const WhiteTriangle = Template.bind({});

WhiteTriangle.args = {
  color: "white",
};

export const BlackTriangle = Template.bind({});

BlackTriangle.args = {
  color: "black",
};

export const RedTriangle = Template.bind({});

RedTriangle.args = {
  color: "red",
};

export const AngeTriangle = Template.bind({});

AngeTriangle.args = {
  color: "ange",
};

export const ExpandTriangle = Template.bind({});

ExpandTriangle.args = {
  color: "black",
  animation: "boundExpand",
  animationDelayMs: 200,
};

export const ExpandAngeTriangle = Template.bind({});

ExpandAngeTriangle.args = {
  color: "ange",
  animation: "boundExpand",
  animationDelayMs: 200,
};

export const AbsolutePositionTriangle = Template.bind({});

AbsolutePositionTriangle.args = {
  color: "black",
  top: 0,
  left: 0,
};

export const RotateTriangle = Template.bind({});

RotateTriangle.args = {
  color: "black",
  rotate: "45deg",
};

export const Triangle60px = Template.bind({});

Triangle60px.args = {
  color: "black",
  width: "60px",
};
