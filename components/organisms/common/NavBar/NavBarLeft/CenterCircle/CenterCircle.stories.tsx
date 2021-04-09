import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../../../constants/colors";
import CenterCircle from "./CenterCircle";

const Decorator = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 960px;
  height: 540px;
  overflow: hidden;
  background-color: ${ANGE_WHITE};
`;

export default {
  title: "organism/NavBarLeftCenterCircle",
  component: CenterCircle,
  decorators: [
    (Story) => (
      <Decorator>
        <Story></Story>
      </Decorator>
    ),
  ],
} as Meta;

export const NormalCenterCircle: React.VFC<{}> = () => <CenterCircle />;
