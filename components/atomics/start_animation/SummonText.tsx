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
import {
  toDeepInsetShadow,
  translate,
  bgColorChange,
} from "../../../styles/commonAnimation";
import {
  summonTextShadowOrder,
  summonTextStripeOrder,
  summonTextToBlackOrder,
} from "../../../constants/start_animation/animation_order";

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
    isPushedButton ? toDeepInsetShadow(200, ANGE_BLACK) : "none"} ${
  summonTextShadowOrder.duration_ms
}ms linear forwards ${summonTextShadowOrder.delay_ms}ms;
  `;

const ColorLine = styled.div<{
  diameter: number;
  color: string;
  toDirection: "left" | "right";
  isStartAnimation: boolean;
}>`
  background-color: ${({ color }) => color};
  width: 100%;
  transform: ${({ toDirection, diameter }) =>
    toDirection === "right"
      ? `translate(-${diameter}px, 0)`
      : `translate(${diameter}px, 0)`};
  height: ${({ diameter }) => diameter / 5}px;
  animation: ${({ toDirection, diameter, isStartAnimation }) =>
        isStartAnimation
          ? toDirection === "right"
            ? translate({ x: -diameter, y: 0 }, { x: 0, y: 0 })
            : translate({ x: diameter, y: 0 }, { x: 0, y: 0 })
          : "none"}
      ${summonTextStripeOrder.duration_ms}ms ease-out
      ${summonTextStripeOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, color }) =>
        isStartAnimation ? bgColorChange(color, ANGE_BLACK) : "none"}
      ${summonTextToBlackOrder.duration_ms}ms linear
      ${summonTextToBlackOrder.delay_ms}ms forwards;
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
  transform: rotate(-30deg);
`;

const SummonMain = styled.span`
  position: absolute;
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
        <SummonMain>Summon</SummonMain>
        <ColorLineWrapper>
          <ColorLine
            diameter={diameter}
            color={DEEP_GREY}
            toDirection="left"
            isStartAnimation={isPushedButton}
          />
          <ColorLine
            diameter={diameter}
            color={SECOND_DEEP_GREY}
            toDirection="right"
            isStartAnimation={isPushedButton}
          />
          <ColorLine
            diameter={diameter}
            color={THIRD_DEEP_GREY}
            toDirection="left"
            isStartAnimation={isPushedButton}
          />
          <ColorLine
            diameter={diameter}
            color={DEEP_GREY}
            toDirection="right"
            isStartAnimation={isPushedButton}
          />
          <ColorLine
            diameter={diameter}
            color={SECOND_DEEP_GREY}
            toDirection="left"
            isStartAnimation={isPushedButton}
          />
        </ColorLineWrapper>
      </StyledSummonText>
    </Wrapper>
  );
};

export default SummonText;
