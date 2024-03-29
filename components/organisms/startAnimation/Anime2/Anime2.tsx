import React from "react";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import CloseAnime2 from "./CloseAnime2";
import ExpandCircle from "./ExpandCircle";
import WaveScreen from "./WaveScreen";

interface Props {
  isStartAnimation: boolean;
  toNextAnimation: () => void;
  mode: "main" | "background";
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const Anime2: React.VFC<Props> = ({
  isStartAnimation,
  toNextAnimation,
  mode,
}) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <ExpandCircle />
        <WaveScreen mode={mode} />
        <CloseAnime2 mode={mode} onCloseAnime2={toNextAnimation} />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Anime2;
