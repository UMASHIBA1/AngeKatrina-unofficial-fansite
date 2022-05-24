import React from "react";
import styled from "styled-components";
import {
  ANGE_BLACK,
  ANGE_LIVE_BACK_COLOR,
  ANGE_YELLOW,
} from "../../../../constants/colors";

// MEMO: 左下右から線を飛ばして円を充填するみたいな感じにする

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55vw;
  height: 30vh;
`;

const YellowCircle = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
  width: 48px;
  height: 48px;
  background-color: ${ANGE_YELLOW};
  border-radius: 50%;
`;

const BlackCircle = styled.div`
  position: absolute;
  top: 84px;
  right: 25%;
  width: 74px;
  height: 74px;
  background-color: ${ANGE_BLACK};
  border-radius: 50%;
`;

const RedCircle = styled.div`
  position: absolute;
  top: 240px;
  left: 14%;
  width: 102px;
  height: 102px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 50%;
`;

const RightTopCircles: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <RedCircle />
        <BlackCircle />
        <YellowCircle />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default RightTopCircles;
