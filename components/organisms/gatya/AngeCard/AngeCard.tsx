import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SSRText from "./SSRText";
import WhiteBG from "./WhiteBG";
import AngeName from "./AngeName";
import AngeDescription from "./AngeDescription";
import AngeImg from "./AngeImg";
import { useTypedSelector } from "../../../../redux/store";
import { angeCardZIndex } from "../../../../constants/gatya/zindex";
import { fadein } from "../../../../styles/commonAnimation";
import { appearAngeCardOrder } from "../../../../constants/gatya/animation_order";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: ${({ isStartAnimation }) => (isStartAnimation ? angeCardZIndex : 0)};
  background-color: #ffffff;
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
    ${appearAngeCardOrder.duration_ms}ms linear
    ${appearAngeCardOrder.delay_ms}ms forwards;
`;

const BackGround = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 20px;
`;

const WhiteBorderBG = styled.div`
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 14px;
  border: #ffffff solid 5px;
`;

interface Props {
  randomInt: number;
}

type AngeImgOptions = "basic" | "hey" | "light-dress";

const angeImgOptions: AngeImgOptions[] = ["basic", "hey", "light-dress"];

const AngeCard: React.FC<Props> = ({ randomInt: randomInt }: Props) => {
  const angeImg = angeImgOptions[randomInt];
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );

  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <BackGround>
        <WhiteBorderBG>
          <SSRText />
          <AngeImg imgType={angeImg} />
          <WhiteBG />
          <AngeName />
          <AngeDescription />
        </WhiteBorderBG>
      </BackGround>
    </Wrapper>
  );
};

export default AngeCard;
