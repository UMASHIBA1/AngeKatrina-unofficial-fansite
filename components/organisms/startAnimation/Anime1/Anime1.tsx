import React from "react";
import styled from "styled-components";
import CenterCircles from "./CenterCircles";
import CenterText from "./CenterText";
import LeftBottomBlackCircle from "./LeftBottomBlackCircle";
import LeftTopCircles from "./LeftTopCircles";
import RightBottomCircle from "./RightBottomCircle";
import RightTopCircles from "./RightTopCircles";

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
      <RightBottomCircle isStartAnimation={isStartAnimation} />
      <LeftTopCircles isStartAnimation={isStartAnimation} />
      <LeftBottomBlackCircle isStartAnimation={isStartAnimation} />
      <RightTopCircles isStartAnimation={isStartAnimation} />
      <CenterCircles isStartAnimation={isStartAnimation} />
      <CenterText isStartAnimation={isStartAnimation} />
    </Wrapper>
  );
};

export default Anime1;
