import React from "react";
import styled from "styled-components";
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
`;

const Anime3: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <OpenAnime3 />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Anime3;
