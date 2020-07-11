import React from "react";
import styled from "styled-components";
import angeBasicImgPath from "../../../../public/imgs/ange-basic.png";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import SpeechBubble, { Props as SpeechBubbleProp } from "./SpeechBubble";
import { useTypedSelector } from "../../../../redux/store";
import sizeTypeJudge from "../../../../systems/sizeTypeJudge";

// アンジュ画像の大体の縦横比
const angeImgAspectRatio = 0.356;

const smAngeHeight = 500;
const tabletAngeHeight = 800;
const pcAngeHeight = "150vh";

const Img = styled.img.attrs({
  src: angeBasicImgPath,
  alt: "アンジュ画像",
})`
  position: absolute;
  bottom: -${smAngeHeight * (3 / 5)}px;
  right: -${smAngeHeight * (1 / 8)}px;
  transform: rotate(-24deg);
  height: ${smAngeHeight}px;
  max-width: none;
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

const HomeAnge: React.FC = () => {
  const size = useTypedSelector((state) => state.sizes);

  const bubbleProp = sizeTypeJudge(size)(
    smSpeechBubbleProp,
    tabletSpeechBubbleProp,
    pcSpeechBubbleProp
  );
  return (
    <React.Fragment>
      <Img />
      <SpeechBubble text="ほにゅ" {...bubbleProp} />
    </React.Fragment>
  );
};

export default HomeAnge;
