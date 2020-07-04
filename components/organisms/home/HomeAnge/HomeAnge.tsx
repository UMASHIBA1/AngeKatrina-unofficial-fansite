import React from "react";
import styled from "styled-components";
import angeBasicImgPath from "../../../../public/imgs/ange-basic.png";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";

const smAngeHeight = 500;
const tabletAngeHeight = 800;
const pcAngeHeight = "150%";

const Img = styled.img.attrs({
  src: angeBasicImgPath,
  alt: "アンジュ画像",
})`
  position: absolute;
  bottom: -${smAngeHeight * (3 / 5)}px;
  right: -${smAngeHeight * (1 / 8)}px;
  transform: rotate(-24deg);
  height: ${smAngeHeight}px;
  max-width: none;
  @media (min-width: ${sm_breakpoint}px) {
    bottom: -${tabletAngeHeight * (3 / 5)}px;
    right: -${tabletAngeHeight * (1 / 8)}px;
    height: ${tabletAngeHeight}px;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    height: ${pcAngeHeight};
    bottom: calc(-${pcAngeHeight} * ${0.45});
    right: auto;
    left: 100px;
    transform: rotate(0);
  }
`;

const HomeAnge: React.FC = () => {
  return <Img />;
};

export default HomeAnge;
