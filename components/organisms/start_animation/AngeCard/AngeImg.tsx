import React from "react";
import styled from "styled-components";
import AngeBasicImg from "../../../../public/start_animation/imgs/ange-basic.png";
import AngeHeyImg from "../../../../public/start_animation/imgs/ange-hey.png";
import AngeLightDressImg from "../../../../public/start_animation/imgs/ange-light-dress.png";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const imgProps: { [s: string]: ImgProps } = {
  basic: {
    src: AngeBasicImg,
    alt: "アンジュ通常画像",
    height: "95%",
  },
  hey: {
    src: AngeHeyImg,
    alt: "アンジュ斜めポージング画像",
    width: "125%",
  },
  "light-dress": {
    src: AngeLightDressImg,
    alt: "アンジュ薄いドレス画像",
    height: "95%",
  },
};

const createCustomImgs = (angeImgDatas: typeof imgProps) => {
  const createCustomImg = ({ src, alt, width, height }: ImgProps) => {
    return styled.img.attrs(() => ({
      src,
      alt,
      width,
      height,
    }))`
      max-width: none; /*NOTE global.scssでmax-width: 100%って定義してあるから上書き */
    `;
  };

  const customImgs: { [s: string]: ReturnType<typeof createCustomImg> } = {};
  for (const key in angeImgDatas) {
    customImgs[key] = createCustomImg(angeImgDatas[key]);
  }
  return customImgs;
};

const customImgs = createCustomImgs(imgProps);

const AngeImg: React.FC = () => {
  const CustomImg = customImgs["hey"];
  return (
    <Wrapper>
      <CustomImg />
    </Wrapper>
  );
};

export default AngeImg;
