import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  ANGE_WHITE,
  ANGE_LIVE_BACK_COLOR,
} from "../../../../../constants/colors";
import SlideContent from "./SlideContent/SlideContent";
import contentDataType from "./SlideContent/contentDatas/contentDataType";

const sliderAnimationDuration_ms = 800;

interface SlideContentsType {
  [key: string]: contentDataType;
}

interface Props {
  slideContents: SlideContentsType;
}

const changeSlideAnimation = keyframes`

	50% {
		transform: translate(0, 0) rotate(45deg);		
	}

	55% {
		transform: translate(0, 0) rotate(45deg);		
	}

	100% {
		transform: translate(-100%, 100%) rotate(45deg);		
	}
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ANGE_WHITE};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Slider = styled.div<{ isChangeSlide: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 100%;
  height: 100%;
  transform: translate(100%, -100%) rotate(45deg);
  animation: ${({ isChangeSlide }) =>
      isChangeSlide ? changeSlideAnimation : "none"}
    ${sliderAnimationDuration_ms}ms ease-in forwards;
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
    <Controller>
      <Slider
        isChangeSlide={isChangeSlide}
        onAnimationEnd={() => setIsChangeSlide(false)}
      />
      <SlideContent
        animationType={slideContents[nowSlideKey].animationType}
        slidePages={slideContents[nowSlideKey].slidePages}
        animationTimeProps={{
          duration_ms: slideContents[nowSlideKey].animationDuration_ms,
          delay_ms: sliderAnimationDuration_ms / 2,
        }}
        onSlideEndFC={() => {
          const otherKeyList = Object.keys(slideContents).filter(
            (key) => key !== nowSlideKey
          );
          const nextKey =
            otherKeyList[Math.floor(Math.random() * otherKeyList.length)];
          setIsChangeSlide(true);
          // TODO Sliderのアニメーションのタイミングと合わせる
          setTimeout(() => {
            changeNowSlideKey(nextKey);
          }, sliderAnimationDuration_ms / 2);
        }}
      />
    </Controller>
  );
};

export default SlideController;
