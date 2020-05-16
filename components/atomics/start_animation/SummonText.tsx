import React from "react";
import styled from "styled-components";
import { ANGE_BROWN, ANGE_RED } from "../../../constants/colors";
import { HWT_MARDELL_FONT_PROP } from "../../../constants/cssProps";
import { toDeepInsetShadow } from "../../../styles/commonAnimation";

const StyledSummonText = styled.div<{
  diameter: number;
  isPushedButton: boolean;
}>`
  ${HWT_MARDELL_FONT_PROP}
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  color: ${ANGE_RED};
  background-color ${ANGE_BROWN};
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - ${({ diameter }) => diameter / 2}px);
  top: calc(50% - ${({ diameter }) => diameter / 2}px);
  font-size: ${({ diameter }) => diameter / 7}px;
  animation: ${({ isPushedButton }) =>
    isPushedButton ? toDeepInsetShadow() : "none"} 300ms linear forwards 100ms;
  `;

interface Props {
  diameter: number;
  isPushedButton: boolean;
  onClickFC?: () => void;
}

const SummonText: React.FC<Props> = ({
  diameter: Diameter,
  isPushedButton,
  onClickFC,
}: Props) => {
  return (
    <StyledSummonText
      diameter={Diameter}
      isPushedButton={isPushedButton}
      onClick={onClickFC}
    >
      <span>Summon</span>
    </StyledSummonText>
  );
};

export default SummonText;
