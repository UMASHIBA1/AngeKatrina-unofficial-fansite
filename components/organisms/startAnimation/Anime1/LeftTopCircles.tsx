import React from "react";
import styled from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import { multiBoundExpand } from "../../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 45vw;
  height: 45vw;
`;

const RedCircle = styled.div`
  position: absolute;
  top: -25%;
  left: -20%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 65%;
  height: 65%;
  border-radius: 50%;
  animation: ${multiBoundExpand(1.2)} 500ms ease-in-out 300ms both;
`;

const BlackCircle = styled.div`
  position: absolute;
  top: 25%;
  left: 38%;
  background-color: ${ANGE_BLACK};
  width: 25%;
  height: 25%;
  border-radius: 50%;
  animation: ${multiBoundExpand(1.2)} 500ms ease-in-out 150ms both;
`;

const YellowCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  background-color: ${ANGE_YELLOW};
  width: 10%;
  height: 10%;
  border-radius: 50%;
  animation: ${multiBoundExpand(1.2)} 500ms ease-in-out 0ms both;
`;

const LeftTopCircles: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <YellowCircle />
        <BlackCircle />
        <RedCircle />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default LeftTopCircles;
