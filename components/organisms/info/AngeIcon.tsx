import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../constants/breakpoints";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
  RED_SHADOW_COLOR,
} from "../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import AngeBasicImgPath from "../../../public/imgs/ange-basic.png";
import AngeheyImgPath from "../../../public/imgs/gatya/ange-hey.png";
import AngeDoctor from "../../../public/imgs/ange-doctor.png";

const shadowAnimation = keyframes`
    0% {
        box-shadow: 0 5px 20px ${RED_SHADOW_COLOR}, inset 0 5px 20px transparent;
    }

    10% {
        box-shadow: 0 5px 20px transparent, inset 0 5px 20px ${RED_SHADOW_COLOR};
    }


    90% {
        box-shadow: 0 5px 20px transparent, inset 0 5px 20px ${RED_SHADOW_COLOR};
    }

    100% {
        box-shadow: 0 5px 20px ${RED_SHADOW_COLOR}, inset 0 5px 20px transparent;
    }

`;

const scaleAngeAnimation = keyframes`
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(0.2);
    }

    80% {
        transform: scale(0.2)
    }

    100% {
        transform: scale(1);
    }
`;

const moveAnimation = keyframes`
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(-50%);
    }
`;

interface AnimationProps {
  runAnimation: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;

  @media (min-width: ${tablet_breakpoint}px) {
    width: 45%;
    height: 100%;
  }
`;

const Background = styled.div<AnimationProps>`
  position: relative;
  top: 0;
  left: 0;
  background-color: ${ANGE_WHITE};
  border: 4px ${ANGE_LIVE_BACK_COLOR} solid;
  border-radius: 50%;
  box-shadow: 0 5px 20px ${RED_SHADOW_COLOR};
  overflow: hidden;
  width: 40vw;
  height: 40vw;
  cursor: pointer;

  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: ${shadowAnimation} 1000ms ease-in forwards;
    `}

  @media (min-width: ${tablet_breakpoint}px) {
    width: 25vw;
    height: 25vw;
  }
`;

const ImgWrapper = styled.div<AnimationProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 200%;
  height: 100%;

  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: ${moveAnimation} 600ms ease-in-out 200ms forwards;
    `}
`;

const AngeImg = styled.img<AnimationProps>`
  width: 50%;
  margin-top: 5%;
  object-fit: cover;
  transform-origin: top;

  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: ${scaleAngeAnimation} 1000ms ease-in forwards;
    `}
`;

const AngeName = styled.p`
  font-size: 1.2rem;
  margin-top: 28px;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${TA_F1_BLOCK_LINE}

  @media (min-width: ${sm_breakpoint}px) {
    margin-top: 40px;
    font-size: 1.8rem;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    display: none;
  }
`;

const useAngeImages = () => {
  const [imageIndex, changeImageIndex] = useState(0);

  const angeImages = [AngeBasicImgPath, AngeheyImgPath, AngeDoctor];

  const toNextImage = () => {
    const nextIndex = (imageIndex + 1) % angeImages.length;
    changeImageIndex(nextIndex);
  };

  const nowAngeImage = angeImages[imageIndex];
  const nextAngeImage = angeImages[(imageIndex + 1) % angeImages.length];

  return [nowAngeImage, nextAngeImage, toNextImage] as [
    string,
    string,
    () => void
  ];
};

const AngeIcon: React.VFC = () => {
  const [runnningAnimation, changeRunningAnimation] = useState(false);
  const [nowAngeImage, nextAngeImage, toNextImage] = useAngeImages();

  return (
    <Wrapper>
      <Background
        key="tmp"
        runAnimation={runnningAnimation}
        onClick={() => {
          changeRunningAnimation(true);
        }}
      >
        <ImgWrapper key="tmp" runAnimation={runnningAnimation}>
          <AngeImg
            runAnimation={runnningAnimation}
            src={nowAngeImage}
            alt="アンジュ画像"
          />
          <AngeImg
            runAnimation={runnningAnimation}
            onAnimationEnd={() => {
              toNextImage();
              changeRunningAnimation(false);
            }}
            src={nextAngeImage}
            alt="アンジュ画像"
          />
        </ImgWrapper>
      </Background>
      <AngeName>アンジュ・カトリーナ</AngeName>
    </Wrapper>
  );
};

export default AngeIcon;
