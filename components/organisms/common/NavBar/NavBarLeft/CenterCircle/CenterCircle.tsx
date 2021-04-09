import React from "react";
import styled from "styled-components";
import FirstInsideCircle from "../../../../../../public/svgs/common/one_yellow_circle.svg";
import SecondInsideCircle from "../../../../../../public/svgs/common/one_black_circle.svg";
import ThirdInsideCircle from "../../../../../../public/svgs/common/two_yellow_two_red_circle.svg";
import { TA_F1_BLOCK_LINE } from "../../../../../../constants/cssProps";
import { ANGE_RED } from "../../../../../../constants/colors";

const SVGWrapper = styled.div<{ width: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width}px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
`;

const CenterText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  font-size: 28px;
  width: 100%;
  margin: 0;
  color: ${ANGE_RED};
  ${TA_F1_BLOCK_LINE}
`;

const CenterCircle: React.FC = () => {
  return (
    <Wrapper>
      <SVGWrapper width={450}>
        <ThirdInsideCircle />
      </SVGWrapper>
      <SVGWrapper width={415}>
        <SecondInsideCircle />
      </SVGWrapper>
      <SVGWrapper width={380}>
        <FirstInsideCircle />
      </SVGWrapper>
      <CenterText>どれにする？</CenterText>
    </Wrapper>
  );
};

export default CenterCircle;
