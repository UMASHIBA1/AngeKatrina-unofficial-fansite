import React, { useState } from "react";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import styled from "styled-components";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";
import { ANGE_WHITE } from "../../../constants/colors";
import SummonText from "../../atomics/start_animation/SummonText";
import { useTypedSelector } from "../../../redux/store";
import { SizeType } from "../../../typing/SizeType";

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const judgeEachDiameter = (size: SizeType) => {
  if (size === "sm") {
    return {
      mostInDiameter: 120,
      SecondInDiameter: 220,
      ThirdInDiameter: 320,
      FourthInDiameter: 420,
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
    <Container>
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={MostIn}
        Diameter={mostInDiameter}
        rotateDirection="right"
        scaleMagnification={1.2}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={SecondIn}
        Diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={1.35}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={ThirdIn}
        Diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={1.65}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isPushedSummonButton}
        SvgElement={FourthIn}
        Diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={2.1}
      />
      <SummonText
        diameter={summonTextDiameter}
        isPushedButton={isPushedSummonButton}
        onClickFC={startSummonAnimation}
      />
    </Container>
  );
};

export default MagicCircle;
