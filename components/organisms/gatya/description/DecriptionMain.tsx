import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import AngeLightDressImg from "../../../../public/imgs/gatya/ange-light-dress.png";
import AngeBasicImg from "../../../../public/imgs/ange-basic.png";
import AngeHeyImg from "../../../../public/imgs/gatya/ange-hey.png";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 24px;
`;

const BackgroundImg = styled.img<{ top: string; left: string; rotate: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: rotate(${({ rotate }) => rotate});
  object-fit: "contain";
`;

const DescriptionMain: React.VFC = () => {
  return (
    <Wrapper>
      <BackgroundImg
        height="240px"
        top="-20%"
        left="70%"
        rotate="180deg"
        alt="アンジュ薄いドレス姿の画像"
        src={AngeLightDressImg}
      />
      <BackgroundImg
        height="400px"
        top="58%"
        left="-10%"
        rotate="30deg"
        alt="アンジュ基本ローブ姿の画像"
        src={AngeBasicImg}
      />
      <BackgroundImg
        height="500px"
        top="46%"
        left="84%"
        rotate="-30deg"
        alt="アンジュてを掲げてるローブ姿の画像"
        src={AngeHeyImg}
      />
    </Wrapper>
  );
};

export default DescriptionMain;
