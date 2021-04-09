import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../../../constants/colors";
import ThreeSlashes from "./ThreeSlashes";

const Decorator = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 960px;
  height: 540px;
  overflow: hidden;
  background-color: ${ANGE_WHITE};
  > div {
    position: absolute;
    top: 0;
    left: 50%;
  }
`;

export default {
  title: "organism/ThreeSlashs",
  component: ThreeSlashes,
  decorators: [
    (Story) => (
      <Decorator>
        <Story></Story>
      </Decorator>
    ),
  ],
} as Meta;

export const NormalThreeSlashs: React.VFC<{}> = () => <ThreeSlashes />;
