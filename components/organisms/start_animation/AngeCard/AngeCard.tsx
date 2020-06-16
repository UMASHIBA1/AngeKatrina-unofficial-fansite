import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SSRText from "./SSRText";
import WhiteBG from "./WhiteBG";
import AngeName from "./AngeName";
import AngeDescription from "./AngeDescription";
import AngeImg from "./AngeImg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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

  return (
    <Wrapper>
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
