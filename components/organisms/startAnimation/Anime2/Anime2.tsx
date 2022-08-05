import React from "react";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import ExpandCircle from "./ExpandCircle";
import WaveScreen from "./WaveScreen";

interface Props {
  isStartAnimation: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const Anime2: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <ExpandCircle />
        <WaveScreen />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Anime2;