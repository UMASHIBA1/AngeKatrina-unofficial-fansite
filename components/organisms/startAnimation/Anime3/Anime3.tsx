import React from "react";
import styled from "styled-components";
import AngeImage from "./AngeImage";
import AngeName from "./AngeName";
import OpenAnime3 from "./OpenAnime3";
import CloseAnime3 from "./CloseAnime3";

interface Props {
  isStartAnimation: boolean;
  onFinishAnimation: () => void;
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
`;

const Anime3: React.VFC<Props> = ({ isStartAnimation, onFinishAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <AngeImage />
        <OpenAnime3 />
        <AngeName />
        <CloseAnime3 onClose={onFinishAnimation} />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Anime3;
