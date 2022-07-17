import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
`;

const WaveBG: React.VFC = () => {
  return <Wrapper></Wrapper>;
};

export default WaveBG;
