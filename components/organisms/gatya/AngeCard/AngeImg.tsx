import React from "react";
import styled from "styled-components";
import AngeBasicImg from "../../../../public/gatya/imgs/ange-basic.png";
import AngeHeyImg from "../../../../public/gatya/imgs/ange-hey.png";
import AngeLightDressImg from "../../../../public/gatya/imgs/ange-light-dress.png";
import { tabletBreakPointForAngeCard } from "./constants";

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: ${tabletBreakPointForAngeCard}px) {
    width: 100%;
  }
  @media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
    top: 0;
    right: 0;
    width: 55%;
  }
`;

interface ImgProps {
  src: string;
  alt: string;
  smTabletHeight: string;
  pcMarginTop: string;
}

const imgProps = {
  basic: {
    src: AngeBasicImg,
    alt: "アンジュ通常画像",
    smTabletHeight: "95%",
    pcMarginTop: "50px",
  },
  hey: {
    src: AngeHeyImg,
    alt: "アンジュ斜めポージング画像",
    smTabletHeight: "95%",
    pcMarginTop: "0",
  },
  "light-dress": {
    src: AngeLightDressImg,
    alt: "アンジュ薄いドレス画像",
    smTabletHeight: "95%",
    pcMarginTop: "70px",
  },
};

const createCustomImgs = (angeImgDatas: typeof imgProps) => {
  const createCustomImg = ({
    src,
    alt,
    smTabletHeight,
    pcMarginTop,
  }: ImgProps) => {
    return styled.img.attrs(() => ({
      src,
      alt,
    }))`
      height: ${smTabletHeight};
      max-width: none; /*NOTE global.scssでmax-width: 100%って定義してあるから上書き */
      @media (min-width: ${tabletBreakPointForAngeCard}px) {
        height: auto;
        width: 100%;
        margin-top: ${pcMarginTop};
      }
    `;
  };

  const customImgs: { [s: string]: ReturnType<typeof createCustomImg> } = {};
  for (const key in angeImgDatas) {
    customImgs[key] = createCustomImg(
      angeImgDatas[key as keyof typeof angeImgDatas] as ImgProps
    );
  }
  return customImgs;
};

const customImgs = createCustomImgs(imgProps);

interface Props {
  imgType: keyof typeof imgProps;
}

const AngeImg: React.FC<Props> = ({ imgType }: Props) => {
  const CustomImg = customImgs[imgType];
  return (
    <Wrapper>
      <CustomImg />
    </Wrapper>
  );
};

export default AngeImg;
