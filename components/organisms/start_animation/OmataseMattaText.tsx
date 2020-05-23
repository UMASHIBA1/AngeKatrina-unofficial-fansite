import React from "react";
import styled from "styled-components";
import { SizeType } from "../../../typing/SizeType";
import { useTypedSelector } from "../../../redux/store";
import { omataseMattaTextZIndex } from "../../../constants/start_animation/zindex";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";

const calcFlexDirection = (size: SizeType) => {
  if (size === "sm") {
    return "column";
  } else {
    return "row";
  }
};

const Wrapper = styled.div<{ size: SizeType }>`
  position: absolute;
  display: flex;
  flex-direction: ${({ size }) => calcFlexDirection(size)};
  align-items: center;
  justify-content: center;
  z-index: ${omataseMattaTextZIndex};
`;

const CharWrapper = styled.span<{ size: SizeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: kan412typos-std, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ size }) => sizeTypeJudge(size)("1.5rem", "3.3rem", "3.3rem")};
  color: #ffffff;
`;

const OmataseMattaText = () => {
  const size = useTypedSelector((state) => state.sizes);
  const omataseMatta = "おまたせ　待った？";

  return (
    <Wrapper size={size}>
      {omataseMatta.split("").map((value, index) => (
        <CharWrapper key={index} size={size}>
          {value}
        </CharWrapper>
      ))}
    </Wrapper>
  );
};

export default OmataseMattaText;
