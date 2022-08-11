import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { translate } from "../../../../styles/commonAnimation";

const Wrapper = styled.div`
  position: absolute;
  top: -100%;
  left: -100%;
  display: flex;
  flex-direction: row;
  width: 300%;
  height: 300%;
  transform: rotate(-45deg);
`;

const RedOpener = styled.div<{ position: "left" | "right" }>`
  width: 50%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  ${({ position }) =>
    position === "left" &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "-25%", y: 0 })} 400ms ease-in
        100ms both;
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      animation: ${translate({ x: 0, y: 0 }, { x: "25%", y: 0 })} 400ms ease-in
        100ms both;
    `}
`;

const OpenAnime3: React.VFC = () => {
  return (
    <Wrapper>
      <RedOpener position="left" />
      <RedOpener position="right" />
    </Wrapper>
  );
};

export default OpenAnime3;
