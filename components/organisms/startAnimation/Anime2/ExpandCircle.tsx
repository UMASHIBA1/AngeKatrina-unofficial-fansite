import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { scale } from "../../../../styles/commonAnimation";

const RedCircle = styled.div`
  position: absolute;
  top: calc(50% - 85px);
  left: calc(50% - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  transform: scale(1);
  animation: ${scale(8)} 300ms cubic-bezier(0.75, -0.5, 0, 1) 0ms forwards;
`;

const ExpandCircle: React.VFC = () => {
  return <RedCircle />;
};

export default ExpandCircle;
