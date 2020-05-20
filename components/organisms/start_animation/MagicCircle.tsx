import React, { useState } from "react";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import styled from "styled-components";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";
import SummonText from "../../atomics/start_animation/SummonText";
import { useTypedSelector } from "../../../redux/store";
import { SizeType } from "../../../typing/SizeType";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const judgeEachDiameter = (size: SizeType) => {
  if (size === "sm") {
    return {
      mostInDiameter: 120,
      SecondInDiameter: 200,
      ThirdInDiameter: 280,
      FourthInDiameter: 360,
      summonTextDiameter: 100,
    };
  } else if (size === "tablet") {
    return {
      mostInDiameter: 220,
      SecondInDiameter: 350,
      ThirdInDiameter: 450,
      FourthInDiameter: 570,
      summonTextDiameter: 150,
    };
  } else {
    return {
      mostInDiameter: 350,
      SecondInDiameter: 550,
      ThirdInDiameter: 700,
      FourthInDiameter: 900,
      summonTextDiameter: 280,
    };
  }
};

const MagicCircle: React.FC = () => {
  const size = useTypedSelector((state) => state.sizes);
  const [isPushedSummonButton, changeIsPushedSummonButton] = useState(false);
  const {
    mostInDiameter,
    SecondInDiameter,
    ThirdInDiameter,
    FourthInDiameter,
    summonTextDiameter,
  } = judgeEachDiameter(size);

  const startSummonAnimation = () => {
    changeIsPushedSummonButton(true);
  };

  return (
    <Wrapper>
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={MostIn}
        diameter={mostInDiameter}
        rotateDirection="right"
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={MostIn}
        diameter={mostInDiameter}
        rotateDirection="right"
        scaleMagnification={size === "sm" ? 2.15 : 2.0}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={SecondIn}
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={1.1}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={SecondIn}
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={2.2}
      />
      {/*  */}
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={ThirdIn}
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={2.4}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={ThirdIn}
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={4.8}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={FourthIn}
        diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={2.85}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={FourthIn}
        diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={5.8}
      />
      <SummonText
        diameter={summonTextDiameter}
        isPushedButton={isPushedSummonButton}
        onClickFC={startSummonAnimation}
      />
    </Wrapper>
  );
};

export default MagicCircle;
