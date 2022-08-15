import React from "react";
import styled from "styled-components";
import angeHey from "../../../../public/imgs/gatya/ange-hey.png";
import { scale } from "../../../../styles/commonAnimation";

const Img = styled.img`
  object-fit: contain;
  height: 120%;
  margin-top: 30%;
  transform-origin: center;
  animation: ${scale(1.6)} 200ms ease-out 1200ms 2 alternate both;
`;
const AngeImage: React.VFC = () => {
  return <Img src={angeHey} alt="アンジュのかわいい立ち絵" />;
};

export default AngeImage;
