import React from "react";
import styled from "styled-components";
import { HWT_MARDELL_FONT_PROP } from "../../../constants/cssProps";
import { ANGE_RED } from "../../../constants/colors";

const StyledSummonText = styled.span`
  ${HWT_MARDELL_FONT_PROP}
  color: ${ANGE_RED};
  position: absolute;
  left: calc(50% - 68px);
  top: calc(50% - 16px);
  font-size: 36px;
`;

const SummonText: React.FC = () => {
  return <StyledSummonText>Summon</StyledSummonText>;
};

export default SummonText;
