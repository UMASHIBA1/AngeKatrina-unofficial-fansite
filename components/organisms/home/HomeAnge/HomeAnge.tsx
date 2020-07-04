import React from "react";
import styled from "styled-components";
import angeBasicImgPath from "../../../../public/imgs/ange-basic.png";

const angeHeight = 500;

const Img = styled.img.attrs({
  src: angeBasicImgPath,
  alt: "アンジュ画像",
})`
  position: absolute;
  bottom: -${angeHeight * (3 / 5)}px;
  right: -60px;
  transform: rotate(-24deg);
  height: ${angeHeight}px;
  max-width: none;
`;

const HomeAnge: React.FC = () => {
  return <Img />;
};

export default HomeAnge;
