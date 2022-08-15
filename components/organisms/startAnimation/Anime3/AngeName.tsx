import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import BGBorderText from "./BGBorderText";

const TextBG = styled.span`
  position: absolute;
  left: 24px;
  bottom: 64px;
  padding: 16px 32px;
  @media (min-width: ${sm_breakpoint}px) {
    left: 48px;
    bottom: 84px;
    padding: 24px 48px;
  }
  @media (min-width: ${tablet_breakpoint}px) {
    left: 64px;
    bottom: 84px;
    padding: 24px 48px;
  }
  background-color: ${ANGE_WHITE};
  border-radius: 16px;
  color: ${ANGE_LIVE_BACK_COLOR};
  text-align: center;
  vertical-align: middle;
  opacity: 0.8;
  font-size: 1rem;
`;

const AngeName: React.VFC = () => {
  return (
    <TextBG>
      <BGBorderText>アンジュ・カトリーナ</BGBorderText>
    </TextBG>
  );
};

export default AngeName;
