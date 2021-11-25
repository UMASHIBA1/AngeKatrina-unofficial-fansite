import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import angeBasicImgPath from "../../../../public/imgs/ange-basic.png";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import SpeechBubble, { Props as SpeechBubbleProp } from "./SpeechBubble";
import { useTypedSelector } from "../../../../redux/store";
import sizeTypeJudge from "../../../../systems/sizeTypeJudge";

const angeTopDownDuration_ms = 200;

const angeTopDownAnimation = keyframes`
  60% {
    margin-bottom: 20px;
  }

  70% {
    margin-bottom: 20px;
  }

  100% {
    margin-bottom: 0;
  }

`;

// アンジュ画像の大体の縦横比
const angeImgAspectRatio = 0.356;

const smAngeHeight = 500;
const tabletAngeHeight = 800;
const pcAngeHeight = "150vh";

const Img = styled.img.attrs({
  src: angeBasicImgPath.src,
  alt: "アンジュ画像",
})<{ isStartAnimation: boolean }>`
  position: absolute;
  bottom: -${smAngeHeight * (3 / 5)}px;
  right: -${smAngeHeight * (1 / 8)}px;
  transform: rotate(-24deg);
  height: ${smAngeHeight}px;
  max-width: none;
  cursor: pointer;
  margin-bottom: 0;
  animation: ${({ isStartAnimation }) =>
      isStartAnimation ? angeTopDownAnimation : "none"}
    ${angeTopDownDuration_ms}ms ease-in forwards;
  @media (min-width: ${sm_breakpoint}px) {
    bottom: -${tabletAngeHeight * (3 / 5)}px;
    right: -${tabletAngeHeight * (1 / 8)}px;
    height: ${tabletAngeHeight}px;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    height: ${pcAngeHeight};
    bottom: calc(-${pcAngeHeight} * ${0.45});
    right: auto;
    left: 100px;
    transform: rotate(0);
  }
`;

const smSpeechBubbleProp: Omit<SpeechBubbleProp, "text"> = {
  whichSide: "left",
  width: "100px",
  fontSize: "1rem",
  bottom: `${smAngeHeight * (1 / 5)}px`,
  right: `${smAngeHeight * angeImgAspectRatio * (7 / 8)}px`,
};

const tabletSpeechBubbleProp: Omit<SpeechBubbleProp, "text"> = {
  whichSide: "left",
  width: "180px",
  fontSize: "1.6rem",
  bottom: `${tabletAngeHeight * (1 / 5)}px`,
  right: `${tabletAngeHeight * angeImgAspectRatio * (7 / 8)}px`,
};

const pcSpeechBubbleProp: Omit<SpeechBubbleProp, "text"> = {
  whichSide: "right",
  width: "300px",
  fontSize: "3rem",
  left: `calc(${pcAngeHeight} * ${angeImgAspectRatio} + 30px)`,
  bottom: `calc(${pcAngeHeight} * 0.4)`,
};

const useAngeComment = () => {
  const angeCommentList = [
    "ほにゅ？",
    "わっ！",
    "死ぬんだぁ",
    "もろて",
    "それはそう",
    "ぺったんこ！",
  ];
  // NOTE サーバー側とクライアントの表示コンテンツを合わせる為最初はindex0
  const randomIndex = 0;
  const [angeCommentNowIndex, _changeAngeComment] = useState(randomIndex);

  const changeAngeComment = () => {
    let randomIndex = Math.floor(Math.random() * angeCommentList.length);
    while (randomIndex == angeCommentNowIndex) {
      randomIndex = Math.floor(Math.random() * angeCommentList.length);
    }
    _changeAngeComment(randomIndex);
  };
  return [angeCommentList[angeCommentNowIndex], changeAngeComment] as [
    string,
    () => void
  ];
};

const HomeAnge: React.FC = () => {
  const size = useTypedSelector((state) => state.sizes);
  const [angeComment, changeAngeComment] = useAngeComment();
  const [isStartAngeTopDownAnimation, changeTopDownAnimationStatus] = useState(
    false
  );

  const bubbleProp = sizeTypeJudge(size)(
    smSpeechBubbleProp,
    tabletSpeechBubbleProp,
    pcSpeechBubbleProp
  );
  return (
    <React.Fragment>
      <Img
        isStartAnimation={isStartAngeTopDownAnimation}
        onClick={() => {
          changeAngeComment();
          changeTopDownAnimationStatus(true);
        }}
        onAnimationEnd={() => changeTopDownAnimationStatus(false)}
      />
      <SpeechBubble text={angeComment} {...bubbleProp} />
    </React.Fragment>
  );
};

export default HomeAnge;
