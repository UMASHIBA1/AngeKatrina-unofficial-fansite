import React from "react";
import styled from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../../constants/colors";
import { RedBlackYellow } from "../../../../../typing/Color";

const Line = styled.div<{ color: RedBlackYellow }>`
  width: 20px;
  height: 140%;
  background-color: ${({ color }) => color};
  margin: 0 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: rotate(24deg);
`;

const ThreeSlashes = () => {
  return (
    <Wrapper>
      <Line color={ANGE_RED} />
      <Line color={ANGE_YELLOW} />
      <Line color={ANGE_BLACK} />
    </Wrapper>
  );
};

export default ThreeSlashes;
