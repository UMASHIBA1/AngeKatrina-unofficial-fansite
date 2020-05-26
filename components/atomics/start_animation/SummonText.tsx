import React from "react";
import styled from "styled-components";
import {
  ANGE_BROWN,
  ANGE_RED,
  ANGE_BLACK,
  SECOND_DEEP_GREY,
  DEEP_GREY,
  THIRD_DEEP_GREY,
} from "../../../constants/colors";
import { HWT_MARDELL_FONT_PROP } from "../../../constants/cssProps";
import { toDeepInsetShadow } from "../../../styles/commonAnimation";
import { summonTextShadowOrder } from "../../../constants/start_animation/animation_order";
const { duration_ms: duration, delay_ms: delay } = summonTextShadowOrder;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;

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
    isPushedButton
      ? toDeepInsetShadow(200, ANGE_BLACK)
      : "none"} ${duration}ms linear forwards ${delay}ms;
  `;

const ColorLine = styled.div<{
  diameter: number;
  color: string;
  direction: "left" | "right";
}>`
  background-color: ${({ color }) => color};
  width: 100%;
  height: ${({ diameter }) => diameter / 5}px;
`;

const ColorLineWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

interface Props {
  diameter: number;
  isPushedButton: boolean;
  onClickFC?: () => void;
}

const SummonText: React.FC<Props> = ({
  diameter: diameter,
  isPushedButton,
  onClickFC,
}: Props) => {
  return (
    <Wrapper>
      <StyledSummonText
        diameter={diameter}
        isPushedButton={isPushedButton}
        onClick={onClickFC}
      >
        Summon
        <ColorLineWrapper>
          <ColorLine diameter={diameter} color={DEEP_GREY} direction="left" />
          <ColorLine
            diameter={diameter}
            color={SECOND_DEEP_GREY}
            direction="right"
          />
          <ColorLine
            diameter={diameter}
            color={THIRD_DEEP_GREY}
            direction="left"
          />
          <ColorLine diameter={diameter} color={DEEP_GREY} direction="right" />
          <ColorLine
            diameter={diameter}
            color={SECOND_DEEP_GREY}
            direction="left"
          />
        </ColorLineWrapper>
      </StyledSummonText>
    </Wrapper>
  );
};

export default SummonText;
