import React from "react";
import styled from "styled-components";
import { ANGE_BLACK } from "../../../constants/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlackCircleMain = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${ANGE_BLACK};
`;

const BlackCircle: React.FC = () => {
  return (
    <Wrapper>
      <BlackCircleMain />
    </Wrapper>
  );
};

export default BlackCircle;
