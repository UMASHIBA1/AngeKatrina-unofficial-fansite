import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_WHITE, ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SlideContent from "./SlideContent/SlideContent";
import { Props as SlideContentProps } from "./SlideContent/SlideContent";

interface SlideContentsType {
  [key: string]: SlideContentProps;
}

interface Props {
  slideContents: SlideContentsType;
}

const changeSlideAnimation = keyframes`

	50% {
		height: 100%;
		transform: translate(0, 0) rotate(45deg);		
	}

	55% {
		height: 100%;
		transform: translate(0, 0) rotate(45deg);		
	}

	100% {
		transform: translate(-100%, 100%) rotate(45deg);		
	}
`;

const Controller = styled.div<{ isChangeSlide: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ANGE_WHITE};
  overflow: hidden;
  width: 100%;
  height: 100%;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    width: 100%;
    height: 100%;
    transform: translate(100%, -100%) rotate(45deg);
    animation: ${({ isChangeSlide }) =>
        isChangeSlide ? changeSlideAnimation : "none"}
      0.8s ease-in forwards;
  }
`;

const useNowSlidekey = (slideContents: Props["slideContents"]) => {
  const slideKeys = Object.keys(slideContents);
  // TODO 初期レンダー時に表示されるコンテンツがバラバラになるようにこのslideKeys[0]のindexをランダムに変える
  const [nowSlidekey, _changeNowSlideKey] = useState(slideKeys[0]);

  const changeNowSlideKey = (key: string) => {
    if (slideKeys.includes(key)) {
      _changeNowSlideKey(key);
    }
  };
  return [nowSlidekey, changeNowSlideKey] as [string, (key: string) => void];
};

const SlideController: React.FC<Props> = ({ slideContents }: Props) => {
  const [nowSlideKey, changeNowSlideKey] = useNowSlidekey(slideContents);
  const [isChangeSlide, setIsChangeSlide] = useState(false);
  return (
    <Controller
      isChangeSlide={isChangeSlide}
      onAnimationEnd={() => setIsChangeSlide(false)}
    >
      <SlideContent {...slideContents[nowSlideKey]} />
    </Controller>
  );
};

export default SlideController;
