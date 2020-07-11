import styled from "styled-components";
import {
  ANGE_RED,
  ANGE_BROWN,
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
} from "../../../../../constants/colors";
import contentDataType from "./contentDataType";

const Styled = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

const TestPage = ({ color }: { color: string }) => {
  return <Styled bgColor={color} />;
};

export default {
  animationType: "splitedSlide",
  slidePages: [
    {
      node: <TestPage color={ANGE_RED} />,
      key: "test-red1",
    },
    {
      node: <TestPage color={ANGE_BROWN} />,
      key: "test-brown1",
    },
    {
      node: <TestPage color={ANGE_BLACK} />,
      key: "test-black1",
    },
    {
      node: <TestPage color={ANGE_LIVE_BACK_COLOR} />,
      key: "test-live-back1",
    },
  ],
  animationDuration_ms: 7000,
} as contentDataType;
