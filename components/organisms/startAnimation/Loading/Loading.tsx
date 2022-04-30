import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import LoadingText from "./LoadingText";
import ThreeSquares from "./ThreeSquares";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const Loading = () => {
  return (
    <Wrapper>
      <ThreeSquares />
      <LoadingText />
    </Wrapper>
  );
};

export default Loading;
