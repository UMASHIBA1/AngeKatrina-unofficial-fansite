import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import AnimateSquare from "./AnimateSquare";

interface Props {
  isStartAnimation: boolean;
  toNextAnimation: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 100%;
  height: 100%;
`;

const AdjusterText = styled.div`
  font-size: 1rem;
  visibility: hidden;
`;

const LoadingToAnime1: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper>
      <AnimateSquare isStartAnimation={isStartAnimation} />
      <AdjusterText>Loading...</AdjusterText>
    </Wrapper>
  );
};

export default LoadingToAnime1;
