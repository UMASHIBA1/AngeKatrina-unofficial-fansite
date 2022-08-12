import React from "react";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import AngeImage from "./AngeImage";
import OpenAnime3 from "./OpenAnime3";

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const Anime3: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <AngeImage />
        <OpenAnime3 />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Anime3;
