import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../../constants/colors";
import LeftBottomBlackCircle from "./LeftBottomBlackCircle";

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

const Anime1: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper>
      <LeftBottomBlackCircle isStartAnimation={isStartAnimation} />
    </Wrapper>
  );
};

export default Anime1;
