import React from "react";
import styled from "styled-components";
import { blackTransitionZIndex } from "../../../constants/zindexs/start_animation";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: ${blackTransitionZIndex};
`;

const BlackTransition: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default BlackTransition;
