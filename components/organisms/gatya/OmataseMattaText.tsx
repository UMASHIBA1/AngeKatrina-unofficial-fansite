import React from "react";
import styled from "styled-components";
import { SizeType } from "../../../typing/SizeType";
import { useTypedSelector } from "../../../redux/store";
import { omataseMattaTextZIndex } from "../../../constants/gatya/zindex";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";
import { omataseMattaFadeinOrder } from "../../../constants/gatya/animation_order";
import { fadein } from "../../../styles/commonAnimation";
import {
  smFontSize,
  tabletFontSize,
  pcFontSize,
  omataseMattaLineHeight,
  omataseMattaContent,
} from "../../../constants/gatya/omataseMattaSetting";

const Wrapper = styled.div<{ size: SizeType; isStartSummonAnimation: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
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
  font-size: ${({ size }) =>
    sizeTypeJudge(size)(smFontSize, tabletFontSize, pcFontSize)};
  color: #ffffff;
  opacity: 0;
  line-height: ${omataseMattaLineHeight};
  animation: ${({ isStartSummonAnimation }) =>
      isStartSummonAnimation ? fadein() : "none"}
    ${omataseMattaFadeinOrder.duration_ms}ms ease-out
    ${({ order }) =>
      order * omataseMattaFadeinOrder.duration_ms +
      omataseMattaFadeinOrder.delay_ms}ms
    forwards;
`;

const OmataseMattaText = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);

  return (
    <Wrapper size={size} isStartSummonAnimation={isStartSummonAnimation}>
      {omataseMattaContent.split("").map((value, index) => (
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
