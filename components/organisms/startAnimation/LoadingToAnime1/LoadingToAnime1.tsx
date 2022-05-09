import React from "react";
import styled from "styled-components";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_YELLOW,
} from "../../../../constants/colors";

interface Props {
  isStartAnimation: boolean;
  toNextAnimation: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${ANGE_YELLOW};
`;

const LoadingToAnime1: React.VFC<Props> = () => {
  return (
    <Wrapper>
      <Square />
    </Wrapper>
  );
};

export default LoadingToAnime1;
