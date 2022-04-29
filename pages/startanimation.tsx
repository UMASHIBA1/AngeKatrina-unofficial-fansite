import React from "react";
import styled from "styled-components";
import Loading from "../components/organisms/startAnimation/Loading/Loading";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StartAnimation: React.VFC = () => {
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  );
};

export default StartAnimation;
