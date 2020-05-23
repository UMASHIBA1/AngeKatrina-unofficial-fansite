import React from "react";
import styled from "styled-components";
import { SizeType } from "../../../typing/SizeType";
import { useTypedSelector } from "../../../redux/store";
import { omataseMattaTextZIndex } from "../../../constants/start_animation/zindex";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";
import { omataseMattaFadeinOrder } from "../../../constants/start_animation/animation_order";
import { fadein } from "../../../styles/commonAnimation";

const calcFlexDirection = (size: SizeType) => {
  if (size === "sm") {
    return "column";
  } else {
    return "row";
  }
};

const Wrapper = styled.div<{ size: SizeType; isStartSummonAnimation: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: ${({ size }) => calcFlexDirection(size)};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: ${({ isStartSummonAnimation }) =>
    isStartSummonAnimation ? omataseMattaTextZIndex : 1};
`;

const CharWrapper = styled.span<{
  size: SizeType;
  isStartSummonAnimation: boolean;
  order: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: kan412typos-std, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ size }) => sizeTypeJudge(size)("1.5rem", "3.3rem", "3.3rem")};
  color: #ffffff;
  opacity: 0;
  animation: ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? fadein() : "none"}
    ${omataseMattaFadeinOrder.duration}ms ease-out
    ${({ order }) =>
      order * omataseMattaFadeinOrder.duration +
      omataseMattaFadeinOrder.delay}ms
    forwards;
`;

const OmataseMattaText = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);
  const omataseMatta = "おまたせ　待った？";

  return (
    <Wrapper size={size} isStartSummonAnimation={isStartSummonAnimation}>
      {omataseMatta.split("").map((value, index) => (
        <CharWrapper
          key={`${value}${index}`}
          order={index}
          size={size}
          isStartSummonAnimation={isStartSummonAnimation}
        >
          {value}
        </CharWrapper>
      ))}
    </Wrapper>
  );
};

export default OmataseMattaText;
