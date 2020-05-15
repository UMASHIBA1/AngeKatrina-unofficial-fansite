import React from "react";
import styled from "styled-components";
import { ANGE_BROWN, ANGE_RED } from "../../../constants/colors";
import { HWT_MARDELL_FONT_PROP } from "../../../constants/cssProps";

const StyledSummonText = styled.div<{ diameter: number }>`
  ${HWT_MARDELL_FONT_PROP}
  color: ${ANGE_RED};
  position: absolute;
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  left: calc(50% - ${({ diameter }) => diameter / 2}px);
  top: calc(50% - ${({ diameter }) => diameter / 2}px);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color ${ANGE_BROWN};
  border-radius: 50%;
  `;

interface Props {
  diameter: number;
}

const SummonText: React.FC<Props> = ({ diameter: Diameter }: Props) => {
  return (
    <StyledSummonText diameter={Diameter}>
      <span>Summon</span>
    </StyledSummonText>
  );
};

export default SummonText;
