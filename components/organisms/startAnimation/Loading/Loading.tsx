import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import ThreeSquares from "./ThreeSquares";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const Loading = () => {
  return (
    <Wrapper>
      <ThreeSquares />
    </Wrapper>
  );
};

export default Loading;
