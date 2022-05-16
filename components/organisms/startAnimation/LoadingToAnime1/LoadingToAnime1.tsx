import React from "react";
import styled from "styled-components";
import AnimateSquare from "./AnimateSquare";
import BackgroundAnimation from "./BackgroundAnimation";
import PowerWaveCircle from "./PowerWaveCircle";

interface Props {
  isStartAnimation: boolean;
  toNextAnimation: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
`;

const SquareAndCircleWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const AdjusterText = styled.div`
  font-size: 1rem;
  visibility: hidden;
`;

const LoadingToAnime1: React.VFC<Props> = ({ isStartAnimation }) => {
  return (
    <Wrapper>
      <BackgroundAnimation isStartAnimation={isStartAnimation} />
      <LoadingWrapper>
        <SquareAndCircleWrapper>
          <PowerWaveCircle isStartAnimation={isStartAnimation} />
          <AnimateSquare isStartAnimation={isStartAnimation} />
        </SquareAndCircleWrapper>
        <AdjusterText>Loading...</AdjusterText>
      </LoadingWrapper>
    </Wrapper>
  );
};

export default LoadingToAnime1;
