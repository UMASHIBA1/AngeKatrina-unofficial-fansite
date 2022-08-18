import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import CircleMain from "./CircleMain";
import meritAndDemeritData from "./SlideController/SlideContent/contentDatas/meritAndDemeritData";
import SlideController from "./SlideController/SlideController";
import sanbakaData from "./SlideController/SlideContent/contentDatas/sanbakaData";
import testData from "./SlideController/SlideContent/contentDatas/testData";
import streamingStyleData from "./SlideController/SlideContent/contentDatas/streamingStyle";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  @media (min-width: ${sm_breakpoint}px) {
    height: 85%;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    top: auto;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 90%;
  }
`;

const CircleSlide: React.FC = () => {
  return (
    <Wrapper>
      <CircleMain>
        <SlideController
          slideContents={{
            id0: meritAndDemeritData,
            id1: sanbakaData,
            id2: streamingStyleData,
          }}
        />
      </CircleMain>
    </Wrapper>
  );
};

export default CircleSlide;
