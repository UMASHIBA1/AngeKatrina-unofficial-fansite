import React from "react";
import styled from "styled-components";
import angeHey from "../../../../public/imgs/gatya/ange-hey.png";

const Img = styled.img`
  object-fit: contain;
  height: 120%;
  margin-top: 30%;
`;

const AngeImage: React.VFC = () => {
  return <Img src={angeHey} alt="アンジュのかわいい立ち絵" />;
};

export default AngeImage;
