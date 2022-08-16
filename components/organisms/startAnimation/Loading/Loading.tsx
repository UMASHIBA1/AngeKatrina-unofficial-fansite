import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import LoadingText from "./LoadingText";
import ThreeSquares from "./ThreeSquares";

interface Props {
  toNextAnimation: () => void;
}

const Wrapper = styled.div<{ hideThis: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100vh;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  ${({ hideThis }) =>
    hideThis &&
    css`
      display: none;
    `}
`;

const Loading: React.VFC<Props> = ({ toNextAnimation }) => {
  const [visibility, changeVisibility] = useState(true);

  return (
    <Wrapper hideThis={!visibility}>
      <ThreeSquares
        toNextAnimation={() => {
          toNextAnimation();
          changeVisibility(false);
        }}
      />
      <LoadingText />
    </Wrapper>
  );
};

export default Loading;
